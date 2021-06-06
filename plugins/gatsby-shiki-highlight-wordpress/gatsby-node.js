const shiki = require("shiki")
const createHtmlDom = require('htmldom')
const { unescape } = require('html-escaper')
// const { dd } = require(`dumper.js`)

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    WpPost: {
      // We want to highlight every code tag
      highlightedContent: {
        type: "String",
        async resolve({ content }) {
          const $ = createHtmlDom(content)
          const highlighter = await shiki.getHighlighter({ theme: "nord" })
          $('code').each((index, codeElement) => {
            // Get the code string and language
            const $codeElement = $(codeElement)
            const code = unescape($codeElement.html())
            const language = "js"
            // Run shiki highlighter
            const generatedCodeBlock = highlighter.codeToHtml(code, language)
            // Change Pre closest tag with the generated HTML Code Block
            $codeElement.parent("pre").parent().after(generatedCodeBlock)
          })
          return $.html()
        },
      },
    },
  }

  createResolvers(resolvers)
}
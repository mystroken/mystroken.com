const shiki = require("shiki")
const cheerio = require('cheerio')
const { unescape } = require('html-escaper')
// const { dd } = require(`dumper.js`)

const SHIKI_THEME = 'min-light'

/**
 * Returns the language from the given language.
 *
 * @param {string} className
 * @returns {string|null}
 */
const getLanguageFromClassName = className => {
  if (typeof className === 'string') {
    const classList = className.split(/\s+/)
    const classListLength = classList.length
    for (let i = classListLength - 1; i >= 0; i--) {
      const classListItem = classList[i]
      if (classListItem.includes('language-')) {
        return classListItem.match(/language-(\S*)/i)[1]
      }
    }
  }
  return null
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    WpPost: {
      // We want to highlight every code tag
      highlightedContent: {
        type: "String",
        async resolve({ content }) {
          if (typeof content !== 'string') return ''
          const $ = cheerio.load(content, null, false)
          const highlighter = await shiki.getHighlighter({ theme: SHIKI_THEME })
          $('code').each((index, codeElement) => {
            // Get the code string and language
            const $codeElement = $(codeElement)
            const $codeElementParent = $codeElement.parent("pre")
            const code = unescape($codeElement.html())
            const language = getLanguageFromClassName($codeElementParent.attr('class'))
            // Run shiki highlighter
            const generatedCodeBlock = highlighter.codeToHtml(code, language)
            // Change Pre closest tag with the generated HTML Code Block
            $codeElementParent.after(generatedCodeBlock)
            $codeElementParent.remove()
          })
          return $.html()
        },
      },
    },
  }

  createResolvers(resolvers)
}

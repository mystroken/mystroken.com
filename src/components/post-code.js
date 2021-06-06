import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import stackoverflowDark from 'react-syntax-highlighter/dist/esm/styles/hljs/stackoverflow-dark'
// import tomorrowNightEighties from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night-eighties'

const PostCode = ({language, children}) => {
  return (
    <SyntaxHighlighter
      style={stackoverflowDark}
      useInlineStyles={true}
      language={language}
      wrapLongLines={true}
      showLineNumbers={false}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default PostCode

import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const PostCode = ({language, children}) => (
  <SyntaxHighlighter
    style={atomDark}
    language={language}>
    {children}
  </SyntaxHighlighter>
)

export default PostCode

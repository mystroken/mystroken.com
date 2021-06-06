import React, {Fragment, useEffect, useState} from 'react'
// import shiki from 'shiki'

const Shiki = ({code, language}) => {
  const [highlighter, setHighlighter] = useState(null)

  useEffect(() => {
    (async() => {
      const shikiHighlighter = await require('shiki').getHighlighter({ theme: 'nord' })
      setHighlighter(shikiHighlighter)
    })();
  }, [highlighter])

  return (
    <Fragment>
      {!!highlighter && highlighter.codeToHtml(code, language)}
    </Fragment>
  )
}

export default Shiki

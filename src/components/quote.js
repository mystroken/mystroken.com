import React from "react"
import parse from "html-react-parser"

import quotes from "../../content/quotes.json"

const random = (min, max) => min + Math.random() * (max - min)
export default function Quote() {
  const randomIndex = Math.round(random(0, quotes.length - 1))
  const { author, text } = quotes[randomIndex]
  return (
    <figure className="quote" itemScope itemType="https://schema.org/Quotation">
      <blockquote className="quote-text">
        <p itemProp="text">{parse(text)}</p>
      </blockquote>
      <figcaption
        className="quote-author"
        itemProp="creator"
        itemScope
        itemType="https://schema.org/Person"
      >
        <cite>
          <span>—</span> <span itemProp="name">{parse(author)}</span>
        </cite>
      </figcaption>
    </figure>
  )
}

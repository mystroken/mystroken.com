import React from "react"

import Seo from "../components/seo"
import RandomQuote from "../components/random-quote"
import Section from "../components/section"

const AboutPage = () => (
  <>
    <Seo title="About me" />
    <h1 data-scroll-section>About page</h1>
    <p data-scroll-section>Welcome to my Gatsby site.</p>

    <Section data-scroll-section className="quote-section">
      <RandomQuote />
    </Section>
  </>
)
export default AboutPage

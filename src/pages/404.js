import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Seo title="404: Not Found" />
      <h1 data-scroll-section>404: Not Found</h1>
      <p data-scroll-section>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

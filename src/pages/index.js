import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import PostList from "../components/post-list"

export default function HomePage({ data }) {
  const site = data.wp.generalSettings
  const posts = data.allWpPost.edges.map(({ post }) => post)

  return (
    <Layout>
      <Helmet title={site.title} />
      <Seo title={site.title} />
      <Bio data-scroll-section />
      <Section
        data-scroll-section
        title="Latest Articles"
        description="Read the latest articles from my blog."
      >
        <PostList posts={posts} />
        <hr />
      </Section>
      <Section
        data-scroll-section
        title="Some Works"
        description="Have a look on what I already did"
      >
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    allWpPost(limit: 2) {
      edges {
        post: node {
          title
          excerpt
          uri
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }

    wp {
      generalSettings {
        title
        description
      }
    }
  }
`

import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo"
import Section from "../components/section"
import RandomQuote from "../components/random-quote"
import PostList from "../components/post-list"
import ProjectList from "../components/project-list"

export default function HomePage({ data }) {
  const site = data.wp.generalSettings
  const posts = data.allWpPost.edges.map(({ post }) => post)

  return (
    <>
      <Helmet title={site.title} />
      <Seo title={site.title} />
      <Section
        data-scroll-section
        className="intro-section"
        underline={false}
        fluid={true}
        style={{ paddingTop: 0 }}
      >
        <div className="title__name" style={{ fontSize: '8rem', marginLeft: '10vw', }}>
          Hello!<br />I'm Mystro Ken
        </div>
        <div className="description" style={{ marginLeft: '30vw', marginTop: '7vw', width: '40vw' }}>
          <p>
            A Software developer &amp; UI/UX designer focused on designing and
            developing software for people.
          </p>
          <p>
            I love architecting software and developing elegant solutions to
            complex problems.
          </p>
        </div>
      </Section>

      <Section
        data-scroll-section
        fluid={true}
        className="quote-section"
      >
        <RandomQuote />
      </Section>

      <Section
        data-scroll-section
        title="Latest Articles"
        description="Read the latest articles from my blog."
        className="posts-section"
      >
        <PostList posts={posts} />
        <Link className="button" to="/blog">
          View All &rarr;
        </Link>
      </Section>

      <Section
        data-scroll-section
        title="Selected Works"
        // description="Have a look on what I already did"
        underline={true}
      >
        <ul className="projects-list">
          <li className="projects-list__item">
            <a
              className="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flexyla.com"
            >
              FlexyLa
            </a>
          </li>
          <li className="projects-list__item">
            <a
              className="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://btt.mystroken.com"
            >
              B&amp;TT Notaires Associés
            </a>
          </li>
          <li className="projects-list__item">
            <a
              className="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://okeko.fr"
            >
              Okeko
            </a>
          </li>
          <li className="projects-list__item">
            <a
              className="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kouaba.mystroken.com"
            >
              Kouaba Agency
            </a>
          </li>
        </ul>
      </Section>

      <Section
        data-scroll-section
        title="Selected Projects"
        description="Have a look on what I already did"
      >
        <ProjectList />
      </Section>
    </>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    allWpPost(limit: 5) {
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

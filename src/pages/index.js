import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

// import Bio from "../components/bio"
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
      <section
        data-scroll-section
        id="intro-section"
        class="section intro-section"
      >
        <div class="greetings">Hello</div>
        <div class="title__name">
          I'm
          <br />
          Mystro Ken
        </div>
        <div class="description">
          <p>
            A Software developer &amp; UI/UX designer focused on designing and
            developing software for people.
          </p>
          <p>
            I love architecting software and developing elegant solutions to
            complex problems.
          </p>
        </div>
      </section>
      <section data-scroll-section class="section quote-section">
        <figure itemScope itemType="https://schema.org/Quotation">
          <blockquote>
            <p itemProp="text">
              A problem without a solution is a poorly stated problem.
            </p>
          </blockquote>
          <figcaption itemProp="creator" itemScope itemType="https://schema.org/Person">
            <cite itemProp="name">— Albert Einstein</cite>
          </figcaption>
        </figure>
      </section>
      <Section
        data-scroll-section
        title="Latest Articles"
        description="Read the latest articles from my blog."
      >
        <PostList posts={posts} />
        <Link className="button" to="/blog">
          View All
        </Link>
        <hr />
      </Section>
      <Section
        data-scroll-section
        title="Selected Works"
        // description="Have a look on what I already did"
      >
        <ul class="projects-list">
          <li class="projects-list__item">
            <a
              class="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.flexyla.com"
            >
              FlexyLa
            </a>
          </li>
          <li class="projects-list__item">
            <a
              class="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://btt.mystroken.com"
            >
              B&amp;TT Notaires Associés
            </a>
          </li>
          <li class="projects-list__item">
            <a
              class="projects-list__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://okeko.fr"
            >
              Okeko
            </a>
          </li>
          <li class="projects-list__item">
            <a
              class="projects-list__link"
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
        <ul>
          <li>Project #1</li>
          <li>Project #2</li>
          <li>Project #3</li>
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

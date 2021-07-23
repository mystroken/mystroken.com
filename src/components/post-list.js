import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

export default function PostList({ posts, ...props }) {
  return (
    <div className="posts" {...props}>
      {posts.map(post => {
        const title = post.title

        return (
          <article
            key={post.uri}
            className="post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <time itemProp="datePublished">{post.date}</time>
            <h3>
              <Link to={post.uri} itemProp="url">
                <span itemProp="headline">{parse(title)}</span>
              </Link>
            </h3>
            <section itemProp="description">{parse(post.excerpt)}</section>
          </article>
        )
      })}
    </div>
  )
}

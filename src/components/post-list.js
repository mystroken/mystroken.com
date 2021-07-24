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
            <time className="post-date" itemProp="datePublished">
              {post.date}
            </time>
            <h3 className="post-title">
              <Link to={post.uri} itemProp="url">
                <span itemProp="headline">{parse(title)}</span>
              </Link>
            </h3>
            <div className="post-description" itemProp="description">
              {parse(post.excerpt)}
            </div>
          </article>
        )
      })}
    </div>
  )
}

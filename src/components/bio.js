/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = (props) => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio" {...props}>
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
      {author?.firstName && (
        <div>
          <p><strong>{author.firstName}</strong></p>
          {author?.description || null}
          {author?.twitter && (
            <p><a href={`https://twitter.com/${author?.twitter || ``}`}>
              Follow me on Twitter
            </a></p>
          )}
        </div>
      )}
    </div>
  )
}

export default Bio

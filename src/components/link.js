import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

export default function Link({ children, ...props }) {
  return (
    <TransitionLink
      entry={{
        delay: 0.6,
      }}
      {...props}
    >
      {children}
    </TransitionLink>
  )
}

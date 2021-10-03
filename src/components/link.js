import React from "react"
// import TransitionLink from "gatsby-plugin-transition-link"
import { Link as TransitionLink } from "gatsby"
// import anime from "animejs"

export default function Link({ children, ...props }) {
  return (
    <TransitionLink
      // exit={{
      //   length: 0.8,
      //   trigger: ({ node }) => {
      //     anime({
      //       targets: node,
      //       opacity: 0,
      //       duration: 800,
      //       easing: "linear",
      //     })
      //   },
      // }}
      // entry={{
      //   delay: 0.8,
      // }}
      {...props}
    >
      {children}
    </TransitionLink>
  )
}

import React from "react"
import { Link as TransitionLink } from "gatsby"

import { equalWithoutChildren } from "../helpers"

const Link = ({ children, ...props }) => {
  return <TransitionLink {...props}>{children}</TransitionLink>
}

export default React.memo(Link, equalWithoutChildren)

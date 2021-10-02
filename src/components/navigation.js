import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

export default function Navigation({ isActive }) {
  return (
    <div className={classNames("menu", { "is-active": isActive })}>
      <Link
        itemProp="url name"
        aria-label="Posts"
        to="/blog"
        className="menu-link"
      >
        Blog
      </Link>
      <Link
        itemProp="url name"
        aria-label="Projects"
        to="/projects"
        className="menu-link"
      >
        Works
      </Link>
      <Link
        itemProp="url name"
        aria-label="About me"
        to="/about"
        className="menu-link"
      >
        About
      </Link>
    </div>
  )
}

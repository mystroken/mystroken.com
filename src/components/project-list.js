import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import projects from "../../content/projects.json"

export default function ProjectList(props) {
  return (
    <div className="projects" {...props}>
      {projects.map(({ title, icon, description, link }) => (
        <article
          key={link}
          className="project"
          itemScope
          itemType="https://schema.org/Article"
        >
          <h3 className="project-title">
            <a href={link} target="_blank" rel="noreferrer">
              <div class="icon">📝</div>
              <h3>TakeNote</h3>
            </a>
            <Link to={link} itemProp="url">
              <span itemProp="headline">{parse(title)}</span>
            </Link>
          </h3>
          <div className="project-description" itemProp="description">
            {parse(description)}
          </div>
        </article>
      ))}
    </div>
  )
}

import React from "react"
import parse from "html-react-parser"

import projects from "../../content/projects.json"

const ProjectList = (props) => {
  return (
    <div className="projects" {...props}>
      {projects.map(({ name, icon, description, link }) => (
        <article
          key={link}
          className="project"
          itemScope
          itemType="https://schema.org/SoftwareSourceCode"
        >
          <h3 className="project-title">
            <a href={link} target="_blank" rel="noreferrer" itemProp="url">
              <span className="project-icon">{parse(icon)}</span>
              <span className="project-name" itemProp="name">
                {parse(name)}
              </span>
            </a>
          </h3>
          <div className="project-description" itemProp="description">
            {parse(description)}
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectList

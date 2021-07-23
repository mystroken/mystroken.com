import React from "react"

export default function Section({ title, description, children, ...props }) {
  return (
    <section className="section" {...props}>
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
      {children}
    </section>
  )
}

import React from "react"

export default function Section({
  title,
  description,
  children,
  underline,
  className,
  fluid,
  ...props
}) {
  const combinedClassName = className ? `section ${className}` : "section"
  const innerClassName = fluid === true ? 'section-inner fluid' : 'section-inner'
  return (
    <section className={combinedClassName} {...props}>
      <div className={innerClassName}>
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
        {children}
        {underline && <hr className="section-line" />}
      </div>
    </section>
  )
}

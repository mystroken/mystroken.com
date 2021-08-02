import React from "react"

export default function Section({
  title,
  description,
  children,
  underline,
  className,
  ...props
}) {
  const combinedClassName = className ? `section ${className}` : "section"
  return (
    <section className={combinedClassName} {...props}>
      <div className="section-inner">
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
        {children}
        {underline && <hr className="section-line" />}
      </div>
    </section>
  )
}

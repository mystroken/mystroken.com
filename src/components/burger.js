import React from "react"
import classNames from "classnames"

export default function Burger({ isClosed, handleToggle }) {
  return (
    <div
      className={classNames("burger", {
        "is-open": !isClosed
      })}
      onClick={handleToggle}
      role="button"
      tabIndex="0"
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

import React from "react"
import classNames from "classnames"

export default function Burger({ isClosed, handleToggle }) {

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleToggle();
    }
  }

  return (
    <div
      className={classNames("burger", {
        "is-open": !isClosed
      })}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

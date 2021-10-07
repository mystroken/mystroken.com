import React, { useCallback } from "react"
import classNames from "classnames"

export default function Burger({ closed, onClick }) {
  const handleKeyDown = useCallback(e => (e.keyCode === 13) && onClick(), [onClick])
  return (
    <div
      className={classNames("burger", {
        "is-open": !closed
      })}
      onClick={onClick}
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

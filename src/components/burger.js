import React, { useCallback } from "react"
import classNames from "classnames"

export default function Burger({ closed, onClick }) {
  const toggleNavbarCollapseState = useCallback(() => onClick(!closed), [closed, onClick])
  const handleKeyDown = useCallback(e => (e.keyCode === 13) && toggleNavbarCollapseState(), [toggleNavbarCollapseState])
  return (
    <div
      className={classNames("burger", {
        "is-open": !closed
      })}
      onClick={toggleNavbarCollapseState}
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

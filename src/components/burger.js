import React, { useCallback } from "react"
import classNames from "classnames"

import { useNavbarCollapseState } from "../hooks/navbar"

export default function Burger() {
  const [isNavbarCollapsed, toggleNavbarCollapse] = useNavbarCollapseState()
  const handleKeyDown = useCallback(e => (e.keyCode === 13) && toggleNavbarCollapse())
  return (
    <div
      className={classNames("burger", {
        "is-open": !isNavbarCollapsed
      })}
      onClick={toggleNavbarCollapse}
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

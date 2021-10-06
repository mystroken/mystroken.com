import React, { useCallback } from "react"
import classNames from "classnames"

const BackToTop = ({ disabled, progress, onClick }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 13) {
        onClick()
      }
    },
    [onClick]
  )

  return (
    <div
      className={classNames("back-to-top", {
        "is-disabled": disabled,
      })}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="3"
          strokeDasharray="283"
          strokeDashoffset="0"
        />
      </svg>
      <span className="arrow">
        <span />
        <span />
        <span />
      </span>
    </div>
  )
}

BackToTop.whyDidYouRender = true
export default BackToTop

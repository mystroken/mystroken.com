import React, { useCallback } from "react"
import classNames from "classnames"

export default function Burger({ isClosed, handleToggle }) {

  const handleKeyDown = useCallback(e => {
    if (e.keyCode === 13) {
      handleToggle(!isClosed)
    }
  }, [isClosed, handleToggle])

  const handleOnClick = useCallback(() => {
    handleToggle(!isClosed)
  }, [handleToggle, isClosed])

  return (
    <div
      className={classNames("burger", {
        "is-open": !isClosed
      })}
      onClick={handleOnClick}
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

import React from "react"

export default function BackToTop({ disabled, progress, onClick }) {
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      onClick()
    }
  }

  return (
    <div
      className="back-to-top"
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
          strokeDasharray="284"
          strokeDashoffset="236.48783265642726"
        />
      </svg>
    </div>
  )
}

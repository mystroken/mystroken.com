import React from "react"
import classNames from "classnames"

export default class BackToTop extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.circleRadius = 45
    this.circleDashArray = Math.ceil(2 * Math.PI * this.circleRadius)
  }

  /**
   * When we type Enter
   * on the focused element.
   * @param {Event} e
   */
  handleKeyDown(e) {
    e.keyCode === 13 && this.props.onClick()
  }

  /**
   * Control when it necessary
   * to update the component.
   * @param {Object} nextProps
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return this.props.disabled !== nextProps.disabled
  }

  render() {
    const { disabled, onClick } = this.props
    return (
      <div
        className={classNames("back-to-top", {
          "is-disabled": disabled,
        })}
        onClick={onClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex="0"
      >
        <svg
          className="progress-svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="3"
            strokeDasharray={this.circleDashArray}
            strokeDashoffset={this.circleDashArray}
          />
        </svg>
        <span className="arrow">
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            stroke="currentColor"
          >
            <line x1="8.00024" y1="1" x2="8.00024" y2="17" stroke-width="2" />
            <path
              d="M8.00024 1.41415L2.05037 7.36397"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="-1"
              x2="8.8995"
              y2="-1"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 8.00024 0)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
    )
  }
}

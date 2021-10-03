import React from "react"
import anime from "animejs"

// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 1000
const transitionEventName = "page-transition::exit"

class Transition extends React.Component {
  constructor(props) {
    super(props)
    this.handlePageTransitionRequest = this.handlePageTransitionRequest.bind(
      this
    )
    this.isPageChanging = false
  }

  componentDidMount() {
    global.window.addEventListener(
      transitionEventName,
      this.handlePageTransitionRequest
    )
  }

  componentWillUnmount() {
    global.window.removeEventListener(
      transitionEventName,
      this.handlePageTransitionRequest
    )
  }

  shouldComponentUpdate() {
    // Block UI updated until the
    // // data fetching ends.
    if (this.isPageChanging) {
      setTimeout(() => {
        this.isPageChanging = false
        anime({
          targets: "#___gatsby",
          opacity: "1",
          duration: timeout / 2,
          easing: "linear",
        })
        this.forceUpdate()
      }, timeout)
    }

    return !this.isPageChanging
  }

  handlePageTransitionRequest() {
    this.isPageChanging = true
    // Run the animation
    anime({
      targets: "#___gatsby",
      opacity: "0",
      duration: timeout / 2,
      easing: "linear",
    })
  }

  render() {
    return <>{this.props.children}</>
  }
}
export default React.memo(Transition)

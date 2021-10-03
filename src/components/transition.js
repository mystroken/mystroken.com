import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 400

const styles = {
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={timeout}>
      {status => <div style={styles[status]}>{children}</div>}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition

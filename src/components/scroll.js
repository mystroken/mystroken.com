import React, { useEffect } from "react"
// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

import { scroll } from "../config"

const Scroll = ({triggers, onUpdate}) => {

  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", args => onUpdate(args))

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [triggers, onUpdate])

  return null
}

export default React.memo(Scroll)

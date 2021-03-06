// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

// custom CSS styles
require("@wordpress/block-library/build-style/style.css")
require("./src/css/locomotive-scroll.css")
require("./src/sass/style.sass")

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  const event = new global.window.CustomEvent("page-transition::exit", {
    location,
    prevLocation,
  })
  global.window.dispatchEvent(event)
}

exports.onRouteUpdate = () => {
  // console.log("Page change !")
}

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const currentPosition = getSavedScrollPosition(location)
//   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

//   window.scrollTo(...(currentPosition || [0, 0]))

//   return false
// }

// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"

// custom CSS styles
require("@wordpress/block-library/build-style/style.css")
require("./src/css/locomotive-scroll.css")
require("./src/sass/style.sass")

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  // console.log(document.documentElement)
  // console.log("Updated !")
  // document.querySelector('#___gatsby').style.opacity = '1'
}

exports.onPreRouteUpdate = () => {
  // console.log("Prefetching...")
  // document.querySelector('#___gatsby').style.opacity = '0'
}

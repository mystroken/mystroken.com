import React, { Fragment, useRef, useEffect } from "react"
import LocomotiveScroll from 'locomotive-scroll'
import Header from "./header"

const Layout = ({ children }) => {
  // const {
  //   wp: {
  //     generalSettings: { title },
  //   },
  // } = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     wp {
  //       generalSettings {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)
  
  const scrollContainerEl = useRef(null)
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#gatsby-focus-wrapper'),
      smooth: true
    })
    return () => {
      scroll.destroy()
    }
  }, [])

  return (
    <Fragment>
      <Header />

      <main
        ref={scrollContainerEl} 
        className="main" 
        role="main" 
        itemScope 
        itemProp="mainContentOfPage"
      >
        {children}
      </main>

      <footer
        data-scroll-section
        id="footer"
        className="footer"
        role="contentinfo"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className="footer__inner">
          ©{" "}
          <span itemProp="copyrightYear">{new Date().getFullYear()}</span> Mystro Ken, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>. The source code is
          hosted on
          {` `}
          <a href="https://github.com/mystroken/mystroken.com/">GitHub</a>.
        </div>
      </footer>
    </Fragment>
  )
}

export default Layout

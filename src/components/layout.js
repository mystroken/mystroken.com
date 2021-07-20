import React, { Fragment } from "react"
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

  return (
    <Fragment>
      <Header />

      <main className="main" role="main" itemScope itemProp="mainContentOfPage">
        {children}
      </main>

      <footer
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

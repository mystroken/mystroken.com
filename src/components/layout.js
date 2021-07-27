import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const scrollContainerEl = useRef(null)

  useEffect(() => {
    let scroll = null
    let lastYScrollPosition = 0
    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      scroll = new LocomotiveScroll({
        el: document.querySelector("#gatsby-focus-wrapper"),
        smooth: true,
      })
      const nav = document.querySelector('.nav')
      const clear = () => {
        nav.classList.remove('dark')
        nav.classList.remove('pull-up')
      }
      const pullUp = () => {
        nav.classList.add('pull-up')
      }
      const showShrinkedNav = () => {
        nav.classList.add('dark')
        nav.classList.remove('pull-up')
      }
      scroll.on("scroll", args => {
        // Clearing when
        // we're on the top
        if (args.scroll.y < 100)
          window.requestAnimationFrame(clear)
        // If we scroll down
        else if (args.scroll.y > lastYScrollPosition)
          window.requestAnimationFrame(pullUp)
        // Else, if we scroll up
        else if (args.scroll.y < (lastYScrollPosition + 30))
          window.requestAnimationFrame(showShrinkedNav)

        lastYScrollPosition = args.scroll.y
      })
    })

    return () => {
      scroll && scroll.destroy()
    }
  }, [])

  return (
    <>
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo">
            <Link aria-label="Mystro Ken" to="/">
              <svg
                width="114"
                height="25"
                viewBox="0 0 114 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.316895 5.86269V19.0968H4.05434V12.6636C4.05434 11.4557 4.1749 10.8518 4.53659 10.2216C4.85005 9.67013 5.45287 9.22374 6.20036 9.22374C6.85139 9.22374 7.28542 9.43381 7.52655 9.95897C7.71945 10.3791 7.76767 10.983 7.76767 11.797V19.0968H11.481V12.6636C11.481 11.4557 11.6016 10.8518 11.9633 10.2216C12.2767 9.67013 12.8795 9.22374 13.627 9.22374C14.3022 9.22374 14.7121 9.46006 14.9291 9.93271C15.122 10.3528 15.1943 10.9305 15.1943 11.797V19.0968H18.9077V10.5629C18.9077 9.01368 18.7148 7.88457 18.2566 7.09683C17.6538 6.0465 16.617 5.60011 15.2184 5.60011C13.5788 5.60011 12.2526 6.38786 11.0952 7.75328C10.5647 6.23031 9.45555 5.60011 7.79178 5.60011C6.15213 5.60011 4.89828 6.44037 3.982 7.70077V5.86269H0.316895Z" />
                <path d="M24.6302 19.0968C24.1721 20.6198 23.714 21.145 22.4119 21.145C22.0743 21.145 21.6885 21.0662 21.3268 20.9349V24.3485C21.8332 24.4798 22.3637 24.5585 22.8941 24.5585C26.1976 24.5585 27.4273 23.0093 29.0428 17.7314L32.708 5.86269H28.8258C27.9578 8.98742 27.3309 11.4819 26.6075 14.3178C25.7877 11.5082 24.8955 8.67232 23.9792 5.86269H19.8319L24.6302 19.0968Z" />
                <path d="M32.7179 17.0487C34.0441 18.5454 35.9008 19.4907 38.095 19.4907C41.3984 19.4907 43.3757 17.5739 43.3757 15.0268C43.3757 13.0574 42.3871 11.797 40.1205 11.0093L38.6978 10.5367C37.3475 10.064 37.1064 9.80142 37.1064 9.27626C37.1064 8.75109 37.4681 8.43599 38.2879 8.43599C39.1801 8.43599 40.1205 8.9349 40.9644 9.93271L43.3998 7.70077C42.1218 6.20405 40.2893 5.44256 38.3603 5.44256C35.0327 5.44256 33.3449 7.56947 33.3449 9.74891C33.3449 11.9546 34.6469 13.11 36.4313 13.6876L37.7092 14.1078C39.3489 14.6592 39.6623 15.0005 39.6623 15.552C39.6623 15.9984 39.3248 16.4447 38.3603 16.4447C37.227 16.4447 36.0937 15.8408 35.3221 14.7905L32.7179 17.0487Z" />
                <path d="M51.8791 15.9196C51.5415 16.0771 50.9387 16.1559 50.6253 16.1559C49.8778 16.1559 49.5161 15.8146 49.5161 14.5804V9.03993H51.8309V5.86269H49.5161V1.60886H45.8269V5.86269H44.0908V9.03993H45.7786V15.2631C45.7786 17.4163 46.2368 19.3594 49.3232 19.3594C50.2395 19.3594 51.0834 19.2544 51.8791 19.0443V15.9196Z" />
                <path d="M57.0831 19.0968V13.2938C57.0831 11.9021 57.3001 11.0356 57.8547 10.3528C58.3128 9.80142 58.988 9.43381 59.7837 9.43381C60.3142 9.43381 60.6517 9.51258 61.2063 9.80142V5.83643C60.8688 5.7314 60.5794 5.67888 60.1936 5.67888C58.4575 5.67888 57.6377 6.49289 56.9143 7.8058V5.86269H53.3456V19.0968H57.0831Z" />
                <path d="M74.5114 12.6373C74.5114 8.04212 72.2207 5.44256 68.435 5.44256C64.5288 5.44256 62.0452 7.98961 62.0452 12.506C62.0452 16.9962 64.3118 19.4907 68.2421 19.4907C71.8831 19.4907 74.5114 17.2325 74.5114 12.6373ZM70.798 12.4798C70.798 15.2631 69.6648 16.1559 68.3145 16.1559C66.9159 16.1559 65.8309 15.1318 65.8309 12.4535C65.8309 9.95897 66.9883 8.77735 68.3627 8.77735C69.7853 8.77735 70.798 9.82768 70.798 12.4798Z" />
                <path d="M88.8137 19.0968L84.2805 10.8255L88.5243 5.86269H84.0394L80.2779 10.5104V0.558533H76.5163V19.0968H80.2779V15.2106L81.6523 13.6351L84.5217 19.0968H88.8137Z" />
                <path d="M97.3286 14.5804C96.9428 15.6307 96.1471 16.1559 95.1103 16.1559C93.76 16.1559 92.8196 15.4207 92.6267 13.7139H100.704C100.704 9.06619 99.3058 5.44256 94.9656 5.44256C91.2764 5.44256 88.8892 8.09464 88.8892 12.401C88.8892 16.8124 91.0835 19.5432 95.0862 19.5432C97.7868 19.5432 99.5229 18.2303 100.608 15.8408L97.3286 14.5804ZM92.6508 10.9568C92.7472 9.46006 93.5671 8.51477 94.8691 8.51477C96.2194 8.51477 96.9428 9.61761 96.9428 10.9568H92.6508Z" />
                <path d="M113.845 19.0968V10.5629C113.845 8.85613 113.604 7.72702 113.073 6.93928C112.446 6.02024 111.482 5.60011 110.156 5.60011C108.468 5.60011 107.118 6.44037 106.201 7.70077V5.86269H102.536V19.0968H106.274V12.6636C106.274 11.4557 106.394 10.8518 106.756 10.2216C107.069 9.67013 107.72 9.22374 108.468 9.22374C109.047 9.22374 109.456 9.38129 109.722 9.74891C110.011 10.169 110.132 10.8255 110.132 11.797V19.0968H113.845Z" />
              </svg>
            </Link>
          </div>
          <ul
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            className="menu"
          >
            <li itemProp="name" className="menu-item">
              <Link
                itemProp="url"
                aria-label="Posts"
                to="/blog"
                className="menu-link"
              >
                Blog
              </Link>
            </li>
            <li itemProp="name" className="menu-item">
              <Link
                itemProp="url"
                aria-label="Projects"
                to="/projects"
                className="menu-link"
              >
                Projects
              </Link>
            </li>
            <li itemProp="name" className="menu-item">
              <Link
                itemProp="url"
                aria-label="About me"
                to="/about"
                className="menu-link"
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main ref={scrollContainerEl} className="main">
        {children}
      </main>

      <footer
        data-scroll-section
        id="footer"
        className="footer"
        role="contentinfo"
      >
        <div className="footer__inner">
          © <span itemProp="copyrightYear">{new Date().getFullYear()}</span>{" "}
          Mystro Ken, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>. The source code is
          hosted on
          {` `}
          <a href="https://github.com/mystroken/mystroken.com/">GitHub</a>.
        </div>
      </footer>
    </>
  )
}

export default Layout

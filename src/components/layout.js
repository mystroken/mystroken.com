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
      const nav = document.querySelector(".nav")
      const clear = () => {
        nav.classList.remove("dark")
        nav.classList.remove("pull-up")
      }
      const pullUp = () => {
        nav.classList.add("pull-up")
      }
      const showShrinkedNav = () => {
        nav.classList.add("dark")
        nav.classList.remove("pull-up")
      }
      scroll.on("scroll", args => {
        // Clearing when
        // we're on the top
        if (args.scroll.y < 100) window.requestAnimationFrame(clear)
        // If we scroll down
        else if (args.scroll.y > lastYScrollPosition)
          window.requestAnimationFrame(pullUp)
        // Else, if we scroll up
        else if (args.scroll.y < lastYScrollPosition + 30)
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
      <nav
        className="nav"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <Link
          className="nav-logo"
          itemProp="url name"
          aria-label="Mystro Ken"
          to="/"
        >
          <svg viewBox="0 0 117 21">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M19,8.90039841 L19,16 L15.0375648,16 L15.0375648,9.5936255 C15.0375648,7.94422311 14.496114,7.1314741 13.4378238,7.1314741 C12.1334197,7.1314741 11.4689119,8.2310757 11.4689119,9.95219124 L11.4689119,16 L7.53108808,16 L7.53108808,9.5936255 C7.53108808,7.94422311 6.98963731,7.1314741 5.90673575,7.1314741 C4.60233161,7.1314741 3.93782383,8.2310757 3.93782383,9.95219124 L3.93782383,16 L0,16 L0,4.21513944 L3.93782383,4.21513944 C3.93782383,4.21513944 5.85751295,4 7.30958549,4 C9.15544041,4 10.361399,4.71713147 10.9274611,6.15139442 C11.7888601,4.71713147 13.0932642,4 14.7914508,4 C17.5971503,4 19,5.62549801 19,8.90039841 Z M26.5351351,12.4369501 L29.1351351,5 L33,5 L27.8468468,17.6686217 C26.9099099,19.9208211 25.9495495,21 24.0990991,21 C22.9513514,21 21.7333333,20.7653959 21.2648649,20.5777126 L20.8900901,20.4369501 L21.6396396,17.6686217 C22.1783784,17.8797654 22.6468468,17.973607 23.0216216,17.973607 C23.4432432,17.973607 23.8414414,17.9970674 24.1459459,17.2228739 L24.5675676,16.2140762 L20,5 L23.9117117,5 L26.5351351,12.4369501 Z M43,12.1945525 C43,13.3385214 42.5443645,14.2723735 41.6091127,14.9961089 C40.7218225,15.6731518 39.5227818,16 37.9880096,16 C35.9496403,16 34.2709832,15.4163424 33,14.2256809 L34.4388489,12.0077821 C34.9184652,12.4046693 35.4940048,12.7315175 36.1894484,13.0116732 C36.8848921,13.2684825 37.4604317,13.4085603 37.940048,13.4085603 C39.0191847,13.4085603 39.5707434,13.0817121 39.5707434,12.4280156 C39.5707434,12.1478599 39.3309353,11.8910506 38.9232614,11.7042802 C38.7074341,11.5875486 38.5395683,11.5175097 38.3717026,11.4708171 C38.0839329,11.3540856 37.4364508,11.1673152 37.41247,11.1673152 C36.7170264,11.0038911 36.1654676,10.8171206 35.7338129,10.6303502 C34.3908873,10.0466926 33.7194245,9.04280156 33.7194245,7.61867704 C33.7194245,6.52140078 34.1510791,5.65758755 34.9904077,5.00389105 C35.853717,4.32684825 36.9328537,4 38.2038369,4 C40.0503597,4 41.5611511,4.46692607 42.736211,5.42412451 L41.4892086,7.61867704 C41.1294964,7.3385214 40.6498801,7.08171206 40.0503597,6.84824903 C39.4748201,6.61478599 38.971223,6.49805447 38.5155875,6.49805447 C37.5803357,6.49805447 37.1007194,6.77821012 37.1007194,7.3385214 C37.1007194,7.75875486 37.676259,8.13229572 38.8273381,8.45914397 C39.498801,8.6459144 40.0503597,8.83268482 40.5059952,8.99610895 C41.1534772,9.22957198 41.6570743,9.50972763 42.0407674,9.85992218 C42.6882494,10.4902724 43,11.2607004 43,12.1945525 Z M49.4352941,5.15541601 L52,5.15541601 L52,8.00470958 L49.4352941,8.00470958 L49.4352941,12.1726845 C49.4352941,12.8791209 49.5529412,13.3500785 49.7647059,13.6091052 C49.9294118,13.7974882 50.2117647,13.8916797 50.6588235,13.8916797 C51.0117647,13.8916797 51.4352941,13.7974882 51.6470588,13.7268446 L51.7882353,13.6797488 L51.9764706,16.6232339 C50.9647059,16.8822606 50.0705882,17 49.2941176,17 C48.0470588,17 47.1058824,16.6467818 46.4705882,15.9167975 C45.9294118,15.2810047 45.6470588,14.1271586 45.6470588,12.5023548 L45.6470588,8.00470958 L44,8.00470958 L44,5.15541601 L45.6470588,5.15541601 L45.6470588,2 L49.4352941,2 L49.4352941,5.15541601 Z M60.8798799,4.14342629 L61,4.21513944 L60.7837838,7.72908367 L60.6156156,7.72908367 C60.2552553,7.53784861 59.7987988,7.44223108 59.2222222,7.44223108 C58.4774775,7.44223108 57.8768769,7.72908367 57.4444444,8.30278884 C57.036036,8.82868526 56.8438438,9.64143426 56.8438438,10.7649402 L56.8438438,16 L53,16 L53,4.21513944 L56.8438438,4.21513944 L56.8198198,5.88844622 L56.8678679,5.88844622 C57.5165165,4.62151394 58.5015015,4 59.7987988,4 C60.2792793,4 60.7117117,4.07171315 60.8798799,4.14342629 Z M68.511883,17 C66.6106033,17 65.0420475,16.4619883 63.8299817,15.3859649 C62.6179159,14.2865497 62,12.8362573 62,11.0116959 C62,9.1871345 62.6179159,7.73684211 63.8299817,6.6374269 C65.0658135,5.5380117 66.6343693,5 68.511883,5 C70.3893967,5 71.9579525,5.5380117 73.1700183,6.6374269 C74.3820841,7.73684211 75,9.1871345 75,11.0116959 C75,12.8362573 74.3820841,14.2865497 73.1700183,15.3859649 C71.9579525,16.4619883 70.3893967,17 68.511883,17 Z M68.5,7 C66.9598214,7 66,8.2421875 66,10 C66,11.7578125 66.9598214,13 68.5,13 C70.0178571,13 71,11.7578125 71,10 C71,8.2421875 70.0178571,7 68.5,7 Z M91.378098,4.581626 L85.4976717,12.1315661 L92,17 L86.8152609,17 L83.3985648,14.7175399 L81.8204696,16.5929518 L81.8204696,17 L78,17 L78,0 L81.8204696,0 L81.8204696,11.3175399 L86.9845579,4.581626 L91.378098,4.581626 Z M103,10.6374269 L102.953216,11.877193 L94.7426901,11.877193 C94.9064327,13.4678363 96.0760234,14.2865497 97.6900585,14.2865497 C98.9298246,14.2865497 100.076023,13.9122807 101.152047,13.1871345 L102.625731,15.128655 L102.415205,15.3157895 C102.017544,15.619883 101.619883,15.9707602 100.684211,16.3684211 C99.8421053,16.6491228 98.6725146,17 97.1520468,17 C95.3274854,17 93.8538012,16.4619883 92.7076023,15.4093567 C91.5614035,14.3333333 91,12.8596491 91,10.9883041 C91,9.14035088 91.5847953,7.69005848 92.7777778,6.61403509 C93.9707602,5.5380117 95.4444444,5 97.2222222,5 C98.9298246,5 100.333333,5.51461988 101.385965,6.56725146 C102.461988,7.59649123 103,8.95321637 103,10.6374269 Z M94,10 L99,10 C98.9753695,8.96969697 98.0640394,8 96.5123153,8 C95.0098522,8 94.0738916,8.94949495 94,10 Z M117,10.0438247 L117,17 L113.033058,17 L113.033058,10.8565737 C113.033058,9.06374502 112.661157,8.1314741 111.14876,8.1314741 C109.68595,8.1314741 108.966942,9.13545817 108.966942,11.1673307 L108.966942,17 L105,17 L105,5.21513944 L108.966942,5.21513944 C108.966942,5.21513944 110.975207,5 112.53719,5 C115.834711,5 117,6.88844622 117,10.0438247 Z"
            />
          </svg>
        </Link>
        <div class="menu-toggle">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div className="menu">
          <Link
            itemProp="url name"
            aria-label="Posts"
            to="/blog"
            className="menu-link"
          >
            Blog
          </Link>
          <Link
            itemProp="url name"
            aria-label="Projects"
            to="/projects"
            className="menu-link"
          >
            Works
          </Link>
          <Link
            itemProp="url name"
            aria-label="About me"
            to="/about"
            className="menu-link"
          >
            About
          </Link>
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
          <nav className="nav-social">
            <a
              className="nav-social__link"
              href="https://www.twitter.com/mystroken"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Twitter"
            >
              <svg
                className="nav-social__svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              className="nav-social__link"
              href="https://www.linkedin.com/in/emmanuel-kwene"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="LinkedIn"
            >
              <svg
                className="nav-social__svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a
              className="nav-social__link"
              href="https://github.com/mystroken"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Github"
            >
              <svg
                className="nav-social__svg"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </nav>
          <div className="copyright">
            © <span itemProp="copyrightYear">{new Date().getFullYear()}</span>{" "}
            Mystro Ken
          </div>
          <div className="credits">
            Built with
            {` `}
            <a
              href="https://www.gatsbyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            {` `}
            And{" "}
            <a
              href="https://wordpress.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress
            </a>
            . The source code is hosted on
            {` `}
            <a
              href="https://github.com/mystroken/mystroken.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout

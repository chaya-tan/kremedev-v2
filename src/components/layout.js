import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <Link to={`/`}>
            <img src="/kreme-logo-light.svg" className="nav-logo" />
          </Link>
          <div className="nav-burger" onClick={() => setToggleNav(!toggleNav)}>
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>ABOUT</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>ELEMENTS</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>TAGS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        {/* <a
          href="https://twitter.com/kreme_q"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/twitter.svg" />
        </a>
        <a
          href="https://github.com/chaya-tan"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/github.svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/chayatan/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/social/linkedin.svg" />
        </a> */}
      </footer>
    </div>
  )
}

export default Layout

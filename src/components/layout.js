/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "typeface-metropolis"
import "./layout.css"
import Countdown from "./Countdown"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Countdown />
        <main>{children}</main>
        <footer className="bg-black text-white text-center p-3 success text-sm md:text-base">
          <a
            href="https://adebola.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            © {new Date().getFullYear()}, Built with{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current inline text-red-600 mr-1"
            >
              <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"></path>
            </svg>
            for <span className="font-bold"> Olamide and Femi</span>
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

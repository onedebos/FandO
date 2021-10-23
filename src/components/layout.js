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
            © {new Date().getFullYear()}, Built with ❤️  for{" "}
            <span className="font-bold"> Kofoworola and Femi</span>
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

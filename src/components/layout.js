/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navigation from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <br/>
      <br/>
      <main>{children}</main>
    </>
  )
}
export default Layout

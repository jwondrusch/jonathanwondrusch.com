import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          flex: `1 1 auto`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main
          style={{

          }}
        >{children}</main>
      </div>

      <footer
        style={{
          maxWidth: 960,
          margin: `0 auto`,
          padding: `1rem`
        }}
      >
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

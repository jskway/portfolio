import React from "react"
import GlobalStyle from "../styles/globalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout

import React from "react"
import styled from "styled-components"

const Container = styled.main`
  font-family: "Helvetica Neue", Arial, -apple-system, sans-serif;
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default Layout

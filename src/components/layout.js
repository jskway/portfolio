import React from "react"
import styled, { keyframes } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import Header from "./header"
import Footer from "./footer"
import { breakpoints } from "../styles/breakpoints"
import { MDXProvider } from "@mdx-js/react"
import * as projectComponents from "./projects/index.js"

const FadeOut = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  min-height: 100vh;
  max-width: 95%;
  margin: 0.75rem auto;
  padding: 2rem;
  opacity: 0;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

  @media (min-width: ${breakpoints.md}) {
    max-width: 900px;
    padding: 2rem 5%;
    margin: 2rem auto;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1300px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MDXProvider components={projectComponents}>
          <main>{children}</main>
        </MDXProvider>
        <Footer />
      </Container>
    </>
  )
}

export default Layout

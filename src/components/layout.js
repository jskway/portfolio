import React from "react"
import styled, { keyframes } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import Header from "./header"

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
  margin: 0.75rem auto;
  padding: 2rem;
  opacity: 0;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

  @media (min-width: 960px) {
    max-width: 940px;
    margin: 2rem auto;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 2rem auto;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout

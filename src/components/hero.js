import React from "react"
import styled from "styled-components"
import CodeSVG from "../images/code.svg"
import { breakpoints } from "../styles/breakpoints"

const HeroContainer = styled.section`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: ${breakpoints.tabletMin}) {
    font-size: 6rem;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    font-size: 6rem;
  }
`

const Code = styled(CodeSVG)`
  max-width: 90%;
  margin-top: -100px;

  @media (min-width: 475px) {
    margin-top: -50px;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 400px;
  }
`

const Hero = () => (
  <>
    <HeroContainer>
      <H1>
        <span>Hello, I'm Jack Kim.</span>
        <br />
        <span>Software Engineer.</span>
      </H1>
      <Code />
    </HeroContainer>
  </>
)

export default Hero

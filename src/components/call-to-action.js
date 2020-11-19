import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

const CTAContainer = styled.section`
  margin-bottom: 25%;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 15%;
  }

  p {
    margin-bottom: 20px;
  }
`

const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 5%;

  @media (min-width: ${breakpoints.sm}) {
    margin-bottom: 2%;
  }
`

const Link = styled.a`
  border-bottom: 2px solid #222;
  transition: 0.3s;
  padding-bottom: 3px;
  font-size: 1.8rem;
  font-weight: 600;

  :hover {
    border-bottom: 2px solid transparent;
  }
`

const CallToAction = () => (
  <CTAContainer>
    <H2>Get In Touch</H2>
    <p>
      Feel free to reach out if you're looking for a developer, have a question,
      or just want to connect.
    </p>
    <Link title="Email - Jack Kim" href="mailto: jackskim29@gmail.com">
      jackskim29@gmail.com
    </Link>
  </CTAContainer>
)

export default CallToAction

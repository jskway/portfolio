import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

const CTAContainer = styled.section`
  font-size: 1.6rem;
  color: #696969;
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
  color: #222;
  margin-bottom: 2%;
`

const Link = styled.a`
  color: #222;
  border-bottom: 2px solid #222;
  transition: 0.3s;
  padding-bottom: 3px;
  text-decoration: none;
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

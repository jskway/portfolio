import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: #696969;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 5%;
  }
`

const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 3%;
`

const Section = styled.section`
  @media (min-width: ${breakpoints.md}) {
    max-width: 70%;
  }
`

const P = styled.p`
  margin: 1rem auto;
`

const About = () => (
  <AboutContainer>
    <H2>ABOUT</H2>
    <Section>
      <P>
        In April 2019, I committed to becoming a software engineer by enrolling
        in Lambda School and graduated from their part-time (18-month) Full
        Stack Web & Computer Science track in August 2020.
      </P>

      <P>
        I love perfecting the details of my craft and apply creativity and
        rationality to everything I do. I believe the most challenging goals can
        be accomplished with enough insight, understanding, and desire. I aim
        for clarity of understanding to achieve consistent, high performance.
      </P>

      <P>
        My mission is to provide users with software that simplifies and removes
        pain points from their lives while respecting their privacy. I'm aiming
        to contribute scalable, robust, and maintainable code to a team that
        aligns with this mission.
      </P>
    </Section>
  </AboutContainer>
)

export default About

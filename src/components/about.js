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
        3 years ago, I came across a HTML, CSS, and JavaScript website tutorial.
        Instantly, I became fascinated with coding and the ability to build
        interactive apps. In September 2020, I graduated from Lambda School's
        part-time (18mo) Full Stack Web & Computer Science program.
      </P>

      <P>
        I love perfecting the details of my craft and apply creativity and
        rationality to everything I do. I believe the most challenging goals can
        be accomplished with enough insight, understanding, and desire.
      </P>

      <P>
        I'm aiming to contribute scalable, robust, and maintainable code to a
        company & team that provides users with an amazing experience.
      </P>

      <P>
        In my free time, I enjoy writing, boxing, and listening to synthwave{" "}
        <span role="img" aria-label="headphone emoji">
          🎧
        </span>{" "}
        .
      </P>
    </Section>
  </AboutContainer>
)

export default About

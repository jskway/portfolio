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
        In 2017, I came across an HTML, CSS, and JavaScript website tutorial.
      </P>
      <P>
        I became fascinated with the ability to turn code into functional,
        interactive applications. A year later, I still found myself coding for
        hours every day. I decided I wanted to write software as a career and
        enrolled in Lambda School. In Sept 2020, I graduated from Lambda
        School's part-time (18mo) Full Stack Web & Computer Science program.
      </P>
      <P>
        I'm devoted to perfecting my craft and apply creativity and rationality
        to everything I do. I believe the most challenging goals can be
        accomplished with enough dedication, insight, and understanding.
      </P>
      <P>
        I'm aiming to contribute scalable, robust, and maintainable code to help
        build software that empowers individuals and protects their privacy &
        data.
      </P>
      <P>In my free time, I enjoy writing and boxing.</P>
    </Section>
  </AboutContainer>
)

export default About

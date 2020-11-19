import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  color: #696969;
  line-height: 1.6;
  margin: 10% auto;
`

const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 3%;
`

const H3 = styled.h3`
  color: #222;
  margin-bottom: 10px;
`
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }

  div {
    margin-right: 5%;
    margin-top: 5%;

    @media (min-width: ${breakpoints.md}) {
      margin-top: 0;
    }
  }

  ul {
    padding-left: 30px;
    line-height: 2;
  }

  ul li {
    list-style-type: circle;
  }
`

const Skills = () => (
  <SkillsContainer>
    <H2>MY SKILLS</H2>
    <SkillsWrapper>
      <div>
        <H3>Languages</H3>
        <ul>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
      <div>
        <H3>Technologies</H3>
        <ul>
          <li>React.js</li>
          <li>Node</li>
          <li>Git/Github</li>
          <li>OAuth 2.0</li>
          <li>Redux</li>
        </ul>
      </div>
      <div>
        <H3>Others</H3>
        <ul>
          <li>Relational Databases</li>
          <li>Unit & Integration Testing</li>
          <li>API Design</li>
          <li>vim</li>
        </ul>
      </div>
    </SkillsWrapper>
  </SkillsContainer>
)

export default Skills

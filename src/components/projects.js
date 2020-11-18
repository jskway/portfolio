import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

const ProjectsContainer = styled.section`
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

const Projects = () => (
  <ProjectsContainer>
    <H2>PROJECTS</H2>
  </ProjectsContainer>
)

export default Projects

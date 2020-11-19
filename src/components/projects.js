import React from "react"
import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"
import useProjects from "../hooks/use-projects"
import ProjectPreview from "./project-preview"

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
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 5%;
  }
`
const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`

const Projects = ({ location }) => {
  const projects = useProjects()

  return (
    <ProjectsContainer>
      <H2>PROJECTS</H2>
      <Div>
        {projects.map(project => (
          <ProjectPreview
            key={project.slug}
            project={project}
            location={location}
          />
        ))}
      </Div>
    </ProjectsContainer>
  )
}

export default Projects

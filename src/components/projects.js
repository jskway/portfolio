import React from "react"
import { withPrefix } from "gatsby"
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
  margin: ${props => (props.isHomepage ? "20%" : "10%")} auto 10%;

  @media (min-width: ${breakpoints.sm}) {
    margin: 2% auto;
  }
`

const H1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 3%;
  }
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
  const isHomepage = location.pathname === withPrefix("/")

  return (
    <ProjectsContainer isHomepage={isHomepage}>
      {isHomepage ? <H2>PROJECTS</H2> : <H1>PROJECTS</H1>}
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

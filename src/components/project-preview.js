import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { breakpoints } from "../styles/breakpoints"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 90%;

  @media (min-width: ${breakpoints.lg}) {
    min-width: 500px;
  }

  p {
    margin: 5% 0;
  }
`

const ProjectImage = styled(Image)`
  max-width: 90%
  height: auto;
`

const H3 = styled.h3`
  font-size: 2.2rem;
  margin: 5% 0;
`
const ProjectLink = styled(Link)`
  font-weight: 600;
`

const ProjectPreview = ({ project }) => {
  return (
    <Article>
      <Link to={project.slug}>
        <ProjectImage fluid={project.image.sharp.fluid} alt={project.title} />
      </Link>
      <div>
        <H3>
          <Link to={project.slug}>{project.title}</Link>
        </H3>
        <p>{project.description}</p>
        <ProjectLink to={project.slug}>View Project &rarr;</ProjectLink>
      </div>
    </Article>
  )
}

export default ProjectPreview

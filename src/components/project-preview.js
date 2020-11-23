import React from "react"
import { Link, withPrefix } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { breakpoints } from "../styles/breakpoints"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin-bottom: 70px;

  @media (min-width: ${breakpoints.lg}) {
    max-width: 50%;
  }

  p {
    margin: 5% 0;

    @media (min-width: ${breakpoints.sm}) {
      margin: 1% 0;
    }
  }
`

const ProjectImage = styled(Image)`
  max-width: 90%
  height: auto;
`

const H3 = styled.h3`
  font-size: 2.2rem;
  margin: 15px 0 5px;
`
const ProjectLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  padding-bottom: 0;
  border-bottom: 2px solid #222;
  transition: 0.3s;
  margin-top: 10px;

  :hover {
    border-bottom: 2px solid transparent;
  }
`

const ProjectPreview = ({ project, location }) => {
  const isHomepage = location.pathname === withPrefix("/")

  return (
    <Article>
      <Link to={isHomepage ? `/projects/${project.slug}` : project.slug}>
        <ProjectImage fluid={project.image.sharp.fluid} alt={project.title} />
      </Link>
      <div>
        <H3>
          <Link to={isHomepage ? `/projects/${project.slug}` : project.slug}>
            {project.title}
          </Link>
        </H3>
        <p>{project.description}</p>
        <ProjectLink
          to={isHomepage ? `/projects/${project.slug}` : project.slug}
        >
          View Project &rarr;
        </ProjectLink>
      </div>
    </Article>
  )
}

export default ProjectPreview

import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const BackLink = styled(Link)`
  display: inline-block;
  color: #222;
  text-decoration: none;
  border-bottom: 2px solid #222;
  padding-bottom: 3px;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 50px;
  transition: 0.3s;

  :hover {
    border-bottom: 2px solid transparent;
  }
`

const H1 = styled.h1`
  font-size: 3.6rem;
  margin-top: 50px;
`

const ProjectTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <SEO />
      <H1>{project.frontmatter.title}</H1>
      <MDXRenderer>{project.body}</MDXRenderer>
      <BackLink to="/projects">&larr; back to all projects</BackLink>
    </Layout>
  )
}

export default ProjectTemplate

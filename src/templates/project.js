import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

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

const ProjectTemplate = ({ data: { mdx: project } }) => {
  return (
    <Layout>
      <h1>{project.frontmatter.title}</h1>
      <p>Posted by {project.frontmatter.author}</p>
      <MDXRenderer>{project.body}</MDXRenderer>
      <Link to="/">&larr; back to all projects</Link>
    </Layout>
  )
}

export default ProjectTemplate

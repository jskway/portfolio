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
        date(formatString: "MMMM DD, YYYY")
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
  font-size: 4.2rem;
  margin-top: 50px;
  margin-bottom: 0;
`
const H5 = styled.h5`
  font-size: 1.8rem;
  font-weight: 300;
  color: #696969;
  margin-bottom: 25px;
`
const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO />
      <H1>{post.frontmatter.title}</H1>
      <H5>
        <em>{post.frontmatter.date}</em>
      </H5>
      <MDXRenderer>{post.body}</MDXRenderer>
      <BackLink to="/blog">&larr; back to all posts</BackLink>
    </Layout>
  )
}

export default PostTemplate

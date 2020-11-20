import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

const Blog = ({ location }) => {
  return (
    <Layout>
      <SEO />
      <Posts location={location} />
    </Layout>
  )
}

export default Blog

import React from "react"
import Layout from "../components/layout"
import Posts from "../components/posts"

const Blog = ({ location }) => {
  return (
    <Layout>
      <Posts location={location} />
    </Layout>
  )
}

export default Blog

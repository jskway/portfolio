import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

const ProjectsPage = ({ location }) => (
  <Layout>
    <SEO />
    <Projects location={location} />
  </Layout>
)

export default ProjectsPage

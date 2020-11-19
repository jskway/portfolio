import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"

const ProjectsPage = ({ location }) => (
  <Layout>
    <Projects location={location} />
  </Layout>
)

export default ProjectsPage

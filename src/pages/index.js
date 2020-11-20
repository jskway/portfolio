import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import CallToAction from "../components/call-to-action"
import SEO from "../components/seo"

const Home = ({ location }) => (
  <Layout>
    <SEO />
    <Hero />
    <About />
    <Skills />
    <Projects location={location} />
    <CallToAction />
  </Layout>
)

export default Home

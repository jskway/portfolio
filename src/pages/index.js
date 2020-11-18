import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import CallToAction from "../components/call-to-action"

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <CallToAction />
  </Layout>
)

export default Home

import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const H1 = styled.h1`
  font-family: "Helvetica Neue";
  font-weight: ${props => props.weight || 400};
  font-size: 42px;
  font-style: ${props => props.fontstyle || "normal"};
`

export default function Home() {
  return (
    <Layout>
      <H1 weight={100}>Ultra Light Hello World!</H1>

      <H1 weight={200}>Thin Hello World!</H1>

      <H1 weight={300}>Light Hello World!</H1>

      <H1 weight={400}>Medium Hello World!</H1>

      <H1 fontstyle={"italic"}>Medium Italic Hello World!</H1>

      <H1 weight={500}>Bold Hello World!</H1>

      <H1 weight={700}>Heavy Hello World!</H1>

      <H1 weight={900}>Black Hello World!</H1>
    </Layout>
  )
}

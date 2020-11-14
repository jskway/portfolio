import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #555;
  font-size: 1.6rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem;
  text-decoration: none;

  &.current-page {
    color: #222;
    border-bottom: 2px solid #222;
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const H1 = styled.h1`
  color: #222;
  font-weight: 900;
  font-size: 2.4rem;
`

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <MainHeader>
    <NavLink to="/">
      <H1>JSK</H1>
    </NavLink>
    <nav>
      <NavLink to="/" activeClassName="current-page">
        HOME
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        PROJECTS
      </NavLink>
      <NavLink to="/projects" activeClassName="current-page">
        BLOG
      </NavLink>
    </nav>
  </MainHeader>
)

export default Header

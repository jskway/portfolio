import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: #696969;
  text-align: center;
  margin-bottom: 5%;

  p {
    margin-top: 40px;
  }
`

const SMLink = styled.a`
  color: #222;
  margin-left: 30px;
  border-bottom: 2px solid transparent;
  transition: 0.3s;
  padding-bottom: 3px;
  text-decoration: none;

  &:first-of-type {
    margin-left: 0;
  }

  :hover {
    border-bottom: 2px solid #222;
  }
`

const Footer = () => (
  <FooterContainer>
    <div>
      <SMLink
        title="Github - jskway"
        target="_blank"
        href="https://github.com/jskway"
      >
        github
      </SMLink>
      <SMLink
        title="SMLinkedIn - Jack kim"
        target="_blank"
        href="https://www.linkedin.com/in/jackskim/"
      >
        linkedin
      </SMLink>
      <SMLink
        title="Twitter - jskway"
        target="_blank"
        href="https://www.twitter.com/jskway"
      >
        twitter
      </SMLink>
      <SMLink
        title="Resume - Jack Kim"
        target="_blank"
        href="https://drive.google.com/file/d/1knN65g0Ig1BOul-sj4YUwyKk_OTC5o8E/view?usp=sharing"
      >
        resume
      </SMLink>
    </div>

    <p>Coded by Jack Kim</p>
  </FooterContainer>
)

export default Footer

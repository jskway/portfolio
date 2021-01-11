import React from "react"
import { Link, withPrefix } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const H2 = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
  border-bottom: 10px;
`
const PostLink = styled(Link)`
  padding-bottom: 1px;
  border-bottom: 2px solid transparent;
  transition: 0.3s;

  :hover {
    border-bottom: 2px solid #222;
  }
`

const Date = styled.p`
  font-weight: 300;
`

const PostPreview = ({ post, location }) => {
  const isHomepage = location.pathname === withPrefix("/")

  return (
    <Article>
      <H2>
        <PostLink to={isHomepage ? `/blog/${post.slug}` : post.slug}>
          {post.title}
        </PostLink>
      </H2>
      <Date>{post.date}</Date>
    </Article>
  )
}

export default PostPreview

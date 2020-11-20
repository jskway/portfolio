import React from "react"
import styled from "styled-components"
import usePosts from "../hooks/use-posts"
import { breakpoints } from "../styles/breakpoints"
import PostPreview from "./post-preview"

const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  color: #696969;
  line-height: 1.6;
  margin: 20% auto 10%;

  @media (min-width: ${breakpoints.sm}) {
    margin: 5% auto;
  }
`

const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 5%;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
`

const Posts = ({ location }) => {
  const posts = usePosts()

  return (
    <PostsContainer>
      <H2>BLOG</H2>
      <Div>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} location={location} />
        ))}
      </Div>
    </PostsContainer>
  )
}

export default Posts

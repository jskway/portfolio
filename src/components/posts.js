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
  margin: 10% auto 10%;

  @media (min-width: ${breakpoints.sm}) {
    margin: 2% auto;
  }
`

const H1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.lg}) {
    margin-bottom: 2%;
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
      <H1>LATEST POSTS</H1>
      <Div>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} location={location} />
        ))}
      </Div>
    </PostsContainer>
  )
}

export default Posts

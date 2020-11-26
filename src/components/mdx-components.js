import styled from "styled-components"
import { breakpoints } from "../styles/breakpoints"

export const MDXWrapper = styled.section`
  h2 {
    margin: 50px 0 20px;
  }

  p {
    font-size: 1.6rem;
    margin: 20px 0;

    @media (min-width: ${breakpoints.md}) {
      max-width: 80%;
    }

    @media (min-width: ${breakpoints.lg}) {
      max-width: 60%;
    }
  }

  table {
    width: 100%;
    max-width: 800px;
    text-align: left;
    margin: 15% 0;

    @media (min-width: ${breakpoints.md}) {
      margin: 5% 0;
    }

    th {
      color: #222;
      width: 25%;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.4rem;
      padding-bottom: 20px;

      @media (min-width: ${breakpoints.sm}) {
        width: auto;
      }
    }

    td {
      width: 100px;
      font-size: 1.6rem;

      a {
        color: #222;
        text-decoration: none;
        font-weight: 700;
        border-bottom: 2px solid transparent;
        transition: 0.3s;

        :hover {
          border-bottom: 2px solid #222;
        }
      }
    }
  }

  ul,
  ol {
    li {
      margin: 15px 0;
    }
  }

  img {
    margin: 50px 0;
  }
`

export const ImageWrapper = styled.div`
  margin: 50px 0;
`

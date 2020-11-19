import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { template: { eq: "project" } } }) {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            description
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(project => ({
    title: project.frontmatter.title,
    author: project.frontmatter.author,
    slug: project.frontmatter.slug,
    image: project.frontmatter.image,
    description: project.frontmatter.description,
  }))
}

export default useProjects

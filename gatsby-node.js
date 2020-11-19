exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes.filter(node => {
    return node.frontmatter.template === "post"
  })

  const projects = result.data.allMdx.nodes.filter(node => {
    return node.frontmatter.template === "project"
  })

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  projects.forEach(project => {
    actions.createPage({
      path: project.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: project.frontmatter.slug,
      },
    })
  })
}

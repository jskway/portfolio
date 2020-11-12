module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/static/fonts/`,
      },
    },
  ],
}

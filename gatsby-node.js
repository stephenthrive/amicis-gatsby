exports.createPages = async ({actions, graphql, reporter}) =>  {
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          uri
        }
      }
    }
  `)

  if(result?.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPage } = result?.data

  let template = require.resolve(`./src/templates/index.js`)

  allWpPage.nodes.map(post => {
    actions.createPage({
      path: post.uri,
      component: template,
      context: post
    })
  })

}
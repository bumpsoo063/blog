const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    // Use the graphql group command to get a list of each tag and category
    // fieldValue is the tag/category name
    const { data, errors } = await graphql(`
    query {
        categories: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `)
    if (errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    // Loop over every category and create a page for each one
    const categories = data.categories.group
    categories.forEach(({ fieldValue }) =>
      createPage({
        path: `${fieldValue}`,
        component: path.resolve("./src/templates/category-layout.js"),
        context: {
          category: fieldValue,
        },
      })
    )
  }
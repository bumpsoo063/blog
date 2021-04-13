import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout.js"
const CategoryPage = ({ data, pageContext }) => (
  <Layout>
    <h1>{pageContext.category} category</h1>
    <p>
      {/* There are <b>{data.allMarkdownRemark.totalCount}</b> posts in the{" "} */}
      {/* <b>{pageContext.category}</b> category. */}
    </p>
    {data.allMarkdownRemark.nodes.map(post => (
      <Link to={post.fields.slug}>
      <h3>
        {post.frontmatter.title}<br/>
      </h3>
      </Link>
    ))}
  </Layout>
)
export default CategoryPage
export const pageQuery = graphql`
  query CategoryPageQuery($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
      totalCount
    }
  }
`
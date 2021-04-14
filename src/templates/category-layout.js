import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout.js"
// import * as stlyes from "../styles/category-layout.module.css"

const CategoryPage = ({ data, pageContext }) => (
  <Layout>
    <center>
    <h1>{pageContext.category} category</h1>
    </center>
    <p>
      {/* There are <b>{data.allMarkdownRemark.totalCount}</b> posts in the{" "} */}
      {/* <b>{pageContext.category}</b> category. */}
    </p>
    {data.allMarkdownRemark.nodes.map(post => (
      <center>
          <h3>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </h3>
      </center>
      
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
          date
        }
        fields {
          slug
        }
      }
      totalCount
    }
  }
`
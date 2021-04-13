import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout.js"
const CategoryPage = ({ data, pageContext }) => (
  <Layout>
    <h2>{pageContext.category}</h2>
    <p>
      There are <b>{data.allMarkdownRemark.totalCount}</b> posts in the{" "}
      <b>{pageContext.category}</b> category.
    </p>
    {data.allMarkdownRemark.nodes.map(post => (
      <Link>
        {post.frontmatter.title}
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
      }
      totalCount
    }
  }
`
import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import * as styles from "../styles/post.module.css"

export default function Post({data}) {
    const post = data.markdownRemark
    return (
        <Layout>
            <div>
        <h1>{post.frontmatter.title}</h1>
        <h3 className={styles.right}>{post.frontmatter.date}</h3>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
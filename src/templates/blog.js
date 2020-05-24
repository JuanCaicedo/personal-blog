import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/Main'
import Card from '../components/Card'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ body, title }) => (
  <Layout title={title}>
    <Card className="juan-blog">
      <MDXRenderer>{body}</MDXRenderer>
    </Card>
  </Layout>
)

export default function Template({ data }) {
  const { mdx } = data
  const {
    frontmatter: { title },
    body,
  } = mdx
  return <Post body={body} title={title} />
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`

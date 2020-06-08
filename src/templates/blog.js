import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/Main'
import Card from '../components/Card'
import Code from '../components/Code'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

function Paragraph({ children }) {
  return <div className="bg-cyan-100">{children}</div>
}

const Post = ({ body, title }) => (
  <Layout title={title}>
    <Card className="juan-blog">
      <MDXProvider components={{ code: Code, p: Paragraph }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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

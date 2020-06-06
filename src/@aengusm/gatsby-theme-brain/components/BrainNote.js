import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../../layout/Main'
import Card from '../../../components/Card'

export default function BrainNote({ note }, pageContext) {
  return (
    <Layout title={note.title}>
      <Card className="juan-blog">
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </Card>
    </Layout>
  )
}

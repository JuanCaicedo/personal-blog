import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../../layout/Main'
import Card from '../../../components/Card'

function References({ note }) {
  if (
    note.inboundReferencePreviews == null ||
    note.inboundReferencePreviews.length < 1
  ) {
    return null
  }

  const references = note.inboundReferencePreviews.map((ref, i) => {
    console.log('ref', ref)
    return (
      <li key={i}>
        <a href={ref.source}>{ref.source}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    )
  })

  return (
    <>
      <h3>Linked References</h3>
      <ul>{references}</ul>
    </>
  )
}

export default function BrainNote({ note }, pageContext) {
  return (
    <Layout title={note.title}>
      <Card className="juan-blog">
        <h1>{note.title}</h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        <References note={note} />
      </Card>
    </Layout>
  )
}

import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../../../layout/Main'
import Card from '../../../components/Card'
import Code from '../../../components/Code'

function References({ note }) {
  if (
    note.inboundReferencePreviews == null ||
    note.inboundReferencePreviews.length < 1
  ) {
    return null
  }

  const references = note.inboundReferencePreviews.map((ref, i) => {
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
      <H3>Where have I mentioned this?</H3>
      <ul>{references}</ul>
    </>
  )
}

function Paragraph({ children }) {
  return <p className="my-4 first:mt-0">{children}</p>
}

function H1({ children }) {
  return <h1 className="text-5xl mb-4 text-center">{children}</h1>
}

function H2({ children }) {
  return <h2 className="text-4xl my-3">{children}</h2>
}

function H3({ children }) {
  return <h3 className="text-3xl my-2">{children}</h3>
}

export default function BrainNote({ note }, pageContext) {
  return (
    <Layout title={note.title}>
      <H1>{note.title}</H1>
      <MDXProvider
        components={{ code: Code, p: Paragraph, h1: H1, h2: H2, h3: H3 }}
      >
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </MDXProvider>
      <References note={note} />
    </Layout>
  )
}

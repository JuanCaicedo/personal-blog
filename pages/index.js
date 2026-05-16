import React from 'react'
import Layout from '../components/Layout'
import MdxRenderer from '../components/MdxRenderer'
import { getNoteBySlug } from '../lib/garden'
import { compileMdx } from '../lib/mdx'

export default function Home({ title, mdxSource }) {
  return (
    <Layout title={title}>
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <MdxRenderer source={mdxSource} />
    </Layout>
  )
}

export async function getStaticProps() {
  const note = getNoteBySlug('home')
  if (!note) return { notFound: true }

  return {
    props: {
      title: note.title,
      mdxSource: await compileMdx(note.content),
    },
  }
}

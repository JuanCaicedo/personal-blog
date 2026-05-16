import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import MdxRenderer from '../../components/MdxRenderer'
import { getNoteBySlug, getNoteSlugs } from '../../lib/garden'
import { compileMdx } from '../../lib/mdx'

function References({ backlinks }) {
  if (!backlinks || backlinks.length === 0) return null

  return (
    <section className="mt-12 pt-6 border-t border-gray-200">
      <h3>Where have I mentioned this?</h3>
      <ul>
        {backlinks.map((ref) => (
          <li key={ref.slug}>
            <Link href={`/garden/${ref.slug}`}>{ref.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function GardenNote({ title, mdxSource, backlinks }) {
  return (
    <Layout title={title}>
      <MdxRenderer source={mdxSource} />
      <References backlinks={backlinks} />
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: getNoteSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const note = getNoteBySlug(params.slug)
  if (!note) return { notFound: true }

  return {
    props: {
      title: note.title,
      mdxSource: await compileMdx(note.content),
      backlinks: note.backlinks,
    },
  }
}

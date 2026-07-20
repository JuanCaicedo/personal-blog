import React from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import MdxRenderer, { mdxComponents } from '../../components/MdxRenderer'
import { getPostBySlug, getPostSlugs } from '../../lib/posts'
import { compileMdx } from '../../lib/mdx'

export default function BlogPost({ title, mdxSource }) {
  return (
    <Layout title={title}>
      <Card className="juan-blog">
        <MdxRenderer source={mdxSource} components={mdxComponents} />
      </Card>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: getPostSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { notFound: true }

  return {
    props: {
      title: post.title,
      mdxSource: await compileMdx(post.content),
    },
  }
}

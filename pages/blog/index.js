import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { getAllPosts } from '../../lib/posts'

function BlogIndex({ posts = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="mb-8 text-center">Previous posts</h1>
      {posts.map(({ title, date, slug }) => (
        <Card key={slug} className="w-full">
          <div>
            <Link href={`/blog/${slug}`}>
              <h3>{title}</h3>
            </Link>
            <div>{date}</div>
          </div>
        </Card>
      ))}
    </Layout>
  )
}

export default BlogIndex

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(({ content, ...post }) => post),
    },
  }
}

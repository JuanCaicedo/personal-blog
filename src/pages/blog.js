import React from 'react'
import { Link, graphql } from 'gatsby'
import * as R from 'ramda'
import { format } from 'date-fns'

import Layout from '../layout/Main'
import Card from '../components/Card'

function Post({ slug, title, date }) {
  const formatted = format(new Date(date), 'MMMM do yyyy')
  return (
    <Card className="w-full">
      <div>
        <Link to={`/blog/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <div>Posted on {formatted}</div>
      </div>
    </Card>
  )
}
function Index({ posts = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="mb-8 text-center">Previous posts</h1>
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </Layout>
  )
}

export default function Page({ data }) {
  const posts = data.allMdx.nodes.map(R.prop('frontmatter'))
  return <Index posts={posts} />
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`

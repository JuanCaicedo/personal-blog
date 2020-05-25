import React from 'react'
import { Link, graphql } from 'gatsby'
import * as R from 'ramda'

import Layout from '../layout/Main'
import Card from '../components/Card'

function Index({ posts = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="mb-8 text-center">Previous posts</h1>
      {posts.map(({ title, date, slug }, i) => (
        <Card key={i} className="w-full">
          <div>
            <Link to={`/blog/${slug}`}>
              <h3>{title}</h3>
            </Link>
            <div>{date}</div>
          </div>
        </Card>
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
    allMdx {
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

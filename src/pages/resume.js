import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layout/Main'

const Page = () => (
  <Layout title="What I'm doing now">
    <h1 className="text-center mb-8">
      I've moved this page to the{' '}
      <Link to="/garden/resume" className="text-5xl">
        garden
      </Link>
    </h1>
  </Layout>
)

export default Page

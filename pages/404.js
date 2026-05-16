import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <Card className="w-full text-center">
        <h1>Page not found</h1>
        <p>I could not find the page you were looking for.</p>
      </Card>
    </Layout>
  )
}

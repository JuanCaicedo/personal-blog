import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

export default function Layout({ children, title = 'Juan Caicedo' }) {
  return (
    <div className="font-sans min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main className="p-4">
        <div className="mt-12 max-w-3xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

import React from 'react'
import Head from 'next/head'
import { Space_Grotesk } from 'next/font/google'
import Nav from './Nav'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
})

export default function Layout({ children, title = 'Juan Caicedo' }) {
  return (
    <div className={`font-sans min-h-screen ${spaceGrotesk.variable}`}>
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

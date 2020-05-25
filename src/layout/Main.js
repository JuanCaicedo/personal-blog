import React from 'react'
import { Helmet } from 'react-helmet'

import Nav from './Nav'
import './blog.css'
import './global.css'

export default ({ children, title = 'This is the default title' }) => (
  <div className="font-sans layout h-full">
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <Nav />

    <main className="p-4">
      <div className="mt-12 max-w-3xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </main>
  </div>
)

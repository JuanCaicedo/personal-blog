import React from 'react'
import { MDXClient } from 'next-mdx-remote-client'
import Code from './Code'

function Paragraph({ children }) {
  return <p className="my-4 first:mt-0">{children}</p>
}

function H1({ children }) {
  return <h1 className="text-5xl mb-4 text-center">{children}</h1>
}

function H2({ children }) {
  return <h2 className="text-4xl my-3">{children}</h2>
}

function H3({ children }) {
  return <h3 className="text-3xl my-2">{children}</h3>
}

function Img({ src, alt }) {
  return <img src={src} alt={alt} className="max-w-full max-h-96 mx-auto my-4 rounded-lg block" />
}

export const mdxComponents = {
  pre: ({ children }) => <>{children}</>,
  code: Code,
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  img: Img,
}

export default function MdxRenderer({ source, components = mdxComponents }) {
  if (!source) return null

  if ('error' in source) {
    return (
      <pre className="overflow-auto bg-red-100 p-4 text-red-900">
        {source.error?.message || 'Unable to render this MDX content.'}
      </pre>
    )
  }

  return <MDXClient {...source} components={components} />
}

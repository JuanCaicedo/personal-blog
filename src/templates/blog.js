import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/Main'
import Card from '../components/Card'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import oceanicNext from 'prism-react-renderer/themes/oceanicNext'
import Highlight, { defaultProps } from 'prism-react-renderer'

const Code = ({
  children,
  codeString,
  className = 'language-js',
  ...props
}) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '1em 1.4em' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const Post = ({ body, title }) => (
  <Layout title={title}>
    <Card className="juan-blog">
      <MDXProvider components={{ code: Code }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Card>
  </Layout>
)

export default function Template({ data }) {
  const { mdx } = data
  const {
    frontmatter: { title },
    body,
  } = mdx
  return <Post body={body} title={title} />
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`

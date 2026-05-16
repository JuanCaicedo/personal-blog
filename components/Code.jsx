import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export default function Code({ children, className = '', ...props }) {
  const code = String(children || '').trimEnd()
  const match = /language-(\w+)/.exec(className)

  if (!match) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <Highlight code={code} language={match[1]} theme={themes.oceanicNext}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '1em 1.4em' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

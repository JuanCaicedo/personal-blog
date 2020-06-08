import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext'

export default function Code({
  children,
  codeString,
  className = 'language-js',
  ...props
}) {
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

import { serialize } from 'next-mdx-remote-client/serialize'

export function compileMdx(source) {
  return serialize({
    source,
    options: {
      disableImports: true,
      disableExports: true,
    },
  })
}

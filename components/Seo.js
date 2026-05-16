import React from 'react'
import Head from 'next/head'

const defaultDescription =
  'Juan Caicedo is a Colombian, Canadian, American full-stack developer.'

export default function Seo({ title, description = defaultDescription, lang = 'en' }) {
  const pageTitle = title ? `${title} | Juan Caicedo` : 'Juan Caicedo'

  return (
    <Head>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@_juancaicedo" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

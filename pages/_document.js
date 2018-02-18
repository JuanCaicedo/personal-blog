import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons/css/tachyons.min.css"
          />
        </Head>
        <body className="bg-blue pa3">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

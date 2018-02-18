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
        <style jsx>{`
          body {
            font-size: 18px;
          }
        `}</style>
        <body className="bg-blue pa3 helvetica">
          <style>{`
            a {
              font-weight: 600;
              color: #ff4136;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

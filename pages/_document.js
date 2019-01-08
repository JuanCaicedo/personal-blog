import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html className="bg-blue">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

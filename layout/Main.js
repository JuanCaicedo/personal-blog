import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default ({
  children,
  title = 'This is the default title',
  size = 'mw8-ns'
}) => (
  <div className="helvetica">
    <style jsx>{`
      div {
        font-size: 18px;
      }

      :global(a) {
        font-weight: 600;
        color: #ff4136;
        text-decoration: none;
      }

      :global(a:hover) {
        text-decoration: underline;
      }
    `}</style>
    <Head>
      <title>{title}</title>
    </Head>

    <Nav />

    <main className={`mw-100 center pa3 ${size}`}>
      <div className="mt5">{children}</div>
    </main>

    <Footer>Footer</Footer>
  </div>
)

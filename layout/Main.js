import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default ({ children, title = 'This is the default title' }) => (
  <div className="helvetica">
    <style jsx>{`
      :global(a) {
        font-weight: 600;
        color: #ff4136;
        text-decoration: none;
      }

      :global(a:hover) {
        text-decoration: underline;
      }

      :global(html *) {
        font-size: 2rem;
      }
    `}</style>
    <Head>
      <title>{title}</title>
    </Head>

    <Nav />

    <main className="p-4">
      <div className="mt-24">{children}</div>
    </main>

    <Footer>Footer</Footer>
  </div>
)

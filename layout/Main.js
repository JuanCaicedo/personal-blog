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

      :global(.juan-blog p) {
        padding-bottom: 3rem;
        font-size: 3rem;
      }

      :global(.juan-blog a) {
        font-size: 3rem;
      }

      :global(.juan-blog h1) {
        padding-bottom: 5rem;
        font-size: 5rem;
      }

      :global(.juan-blog h2) {
        padding-bottom: 4rem;
        font-size: 4rem;
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

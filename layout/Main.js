import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const GhLink = () => (
  <div className="z-0">
    <style jsx>{`
      a {
        top: 100px;
        left: -70px;
      }
    `}</style>

    <a
      href="https://github.com/juancaicedo/personal-blog"
      className="near-white bg-red pv2 ph5 rotate-315 dib fixed near-white link"
    >
      Fork me on GitHub
    </a>
  </div>
)

export default ({ children, title = 'This is the default title' }) => (
  <div className="bg-blue helvetica">
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

    <GhLink />

    <main className="mw-100 mw7-ns center pa3">
      <div className="mt5">{children}</div>
    </main>

    <Footer>Footer</Footer>
  </div>
)

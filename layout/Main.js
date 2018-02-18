import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>

    <style jsx>{`
      a {
        top: 50px;
        left: -70px;
      }
    `}</style>
    <a
      href="https://github.com/juancaicedo/personal-blog"
      className="near-white bg-red pv2 ph5 rotate-315 dib absolute"
    >
      Fork me on GitHub
    </a>

    <main className="mw-100 mw7-ns center">{children}</main>

    <Footer>Footer</Footer>
  </div>
)

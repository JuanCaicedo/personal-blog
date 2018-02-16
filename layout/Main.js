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

    <main>{children}</main>

    <Footer>Footer</Footer>
  </div>
)

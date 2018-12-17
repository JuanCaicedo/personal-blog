import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import './blog.css'

export default ({ children, title = 'This is the default title' }) => (
  <div className="helvetica">
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

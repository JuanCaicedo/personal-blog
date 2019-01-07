import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import './blog.css'
import './global.css'

export default ({ children, title = 'This is the default title' }) => (
  <div className="font-sans">
    <Head>
      <title>{title}</title>
    </Head>

    <Nav />

    <main className="p-4">
      <div className="mt-12 max-w-lg mx-auto flex flex-col items-center">
        <div className="max-w-md">{children}</div>
      </div>
    </main>

    <Footer>Footer</Footer>
  </div>
)

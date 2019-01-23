import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import Layout from '../../layout/Main'
import Card from '../../components/Card'
import * as Data from '../../util/data'
import env from '../../util/env'
import 'prismjs/themes/prism.css'

const Blog = ({ content, posts = [] }) => {
  return content ? (
    <Layout title={content.title}>
      <Card className="juan-blog">
        <ReactMarkdown source={content} />
      </Card>
    </Layout>
  ) : (
    <Layout title="Blog">
      <h1 className="mb-8 text-center">Previous posts</h1>
      {posts.map(({ title, date, slug }, i) => (
        <Card key={i} className="w-full">
          <div>
            <h3>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <div>{date}</div>
          </div>
        </Card>
      ))}
    </Layout>
  )
}

const getPosts = async req => {
  const baseUrl = Data.getUrl(env, req, req ? {} : window.location)
  const response = await axios(`${baseUrl}/`)
  const json = response.data
  return json
}

const getPost = async (slug, req) => {
  const baseUrl = Data.getUrl(env, req, req ? {} : window.location)
  const response = await axios(`${baseUrl}/?slug=${slug}`)
  const json = response.data
  return json
}

Blog.getInitialProps = async ({ req, query }) => {
  try {
    const { slug } = req ? req.params : query
    if (slug) {
      const { body } = await getPost(req.params.slug, req)
      return { content: body }
    }
    const posts = await getPosts(req)
    return { posts }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Blog

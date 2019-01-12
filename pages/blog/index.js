import axios from 'axios'
import Link from 'next/link'

import Layout from '../../layout/Main'
import Card from '../../components/Card'
import * as Data from '../../util/data'

const env = {
  NODE_ENV: process.env.NODE_ENV,
  API_PROTOCOL: process.env.API_PROTOCOL,
  API_PORT: process.env.API_PORT
}

const Post = ({ posts = [] }) => (
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

const getPosts = async req => {
  const baseUrl = Data.getUrl(env, req, req ? {} : window.location)
  const response = await axios(`${baseUrl}/list`)
  const json = response.data
  return json
}

Post.getInitialProps = async ({ req }) => {
  try {
    const posts = await getPosts(req)
    return { posts }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Post

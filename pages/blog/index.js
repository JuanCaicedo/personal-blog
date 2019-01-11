import axios from 'axios'

import Link from 'next/link'
import Layout from '../../layout/Main'
import posts from '../../content/all-posts'
import Card from '../../components/Card'

const Post = ({ posts }) => (
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
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? `${process.env.API_URL}/api/blog/list`
      : `${process.env.API_URL}/list`
  const response = await axios(baseUrl)
  const json = response.data
  return json
}

Post.getInitialProps = async ({ req }) => {
  try {
    const posts = await getPosts(req)
    console.log('posts', posts)
    return { posts }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Post

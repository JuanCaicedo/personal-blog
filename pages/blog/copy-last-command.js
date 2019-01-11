import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import Layout from '../../layout/Main'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = ({ content }) => (
  <Layout title="How to copy last command in bash">
    <Card className="juan-blog">
      <ReactMarkdown source={content} />,
    </Card>
  </Layout>
)

const getPost = async (slug, req) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? `${process.env.API_URL}/api/blog/`
      : `${process.env.API_URL}/`
  const response = await axios(`${baseUrl}/${slug}`)
  const json = response.data
  return json
}

Post.getInitialProps = async ({ req }) => {
  try {
    const { content } = await getPost('copy-last-command', req)
    return { content }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Post

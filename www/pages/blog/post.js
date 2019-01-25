import ReactMarkdown from 'react-markdown'
import axios from 'axios'

import Layout from '../../layout/Main'
import Card from '../../components/Card'
import * as Data from '../../util/data'
import env from '../../util/env'
import 'prismjs/themes/prism.css'

const Post = ({ content, title }) => (
  <Layout title={title}>
    <Card className="juan-blog">
      <ReactMarkdown source={content} />
    </Card>
  </Layout>
)

const getPost = async (slug, req) => {
  const baseUrl = Data.getUrl(env, req, req ? {} : window.location)
  const response = await axios(`${baseUrl}/?slug=${slug}`)
  const json = response.data
  return json
}

Post.getInitialProps = async ({ req, query }) => {
  try {
    const { slug } = req && req.params ? req.params : query
    const { body } = await getPost(slug, req)
    return { content: body }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Post

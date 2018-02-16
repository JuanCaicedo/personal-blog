import Layout from '../layout/Main'
import Markdown from '../content/console-log.mdx'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="post">
    <Markdown />
  </Layout>
)
export default Post

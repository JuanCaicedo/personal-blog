import Layout from '../../layout/Main'
import Content, { meta } from '../../content/console-log-spacemacs.mdx'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title={meta.title}>
    <Content />
  </Layout>
)

export default Post

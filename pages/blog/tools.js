import Layout from '../../layout/Main'
import Content, { meta } from '../../content/tools.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="My most essential tools">
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

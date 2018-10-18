import Layout from '../../../layout/Main'
import Content from '../../../content/primera-charla-en-espanol.mdx'
import Card from '../../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Mi primera charla en español">
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

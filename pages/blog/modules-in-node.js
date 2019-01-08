import Layout from '../../layout/Main'
import Content from '../../content/modules-in-node.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Modules in Node">
    <Card className="juan-blog">
      <Content />
    </Card>
  </Layout>
)

export default Post

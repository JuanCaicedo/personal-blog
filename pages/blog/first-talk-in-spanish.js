import Layout from '../../layout/Main'
import Content from '../../content/first-talk-in-spanish.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="My first talk in Spanish">
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

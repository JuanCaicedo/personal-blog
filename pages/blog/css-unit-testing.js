import Layout from '../../layout/Main'
import Content from '../../content/css-unit-testing.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="CSS unit testing">
    <Card className="juan-blog">
      <Content />
    </Card>
  </Layout>
)

export default Post

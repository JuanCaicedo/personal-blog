import Layout from '../../layout/Main'
import Content, { meta } from '../../content/console-log-spacemacs.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title={meta.title}>
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

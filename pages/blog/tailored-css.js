import Layout from '../../layout/Main'
import Content from '../../content/tailored-css.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Tailored CSS">
    <Card className="juan-blog">
      <Content />
    </Card>
  </Layout>
)

export default Post

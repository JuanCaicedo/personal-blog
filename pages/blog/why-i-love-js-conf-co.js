import Layout from '../../layout/Main'
import Content from '../../content/js-conf-colombia.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Why I love JSConf 🇨🇴">
    <Card className="juan-blog">
      <Content />
    </Card>
  </Layout>
)

export default Post

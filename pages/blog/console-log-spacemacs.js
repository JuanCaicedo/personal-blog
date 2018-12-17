import Layout from '../../layout/Main'
import Content from '../../content/console-log-spacemacs.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Shortcut for console.log in Spacemacs">
    <Card className="juan-blog">
      <Content />
    </Card>
  </Layout>
)

export default Post

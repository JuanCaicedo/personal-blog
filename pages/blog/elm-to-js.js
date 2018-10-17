import Layout from '../../layout/Main'
import Content from '../../content/elm-to-js.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Elm-lite, in javascript">
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

import Layout from '../../layout/Main'
import Content from '../../content/js-conf-colombia.mdx'
import Card from '../../components/Card'
import 'prismjs/themes/prism.css'

const Post = () => (
  <Layout title="Why I love JSConf 🇨🇴">
    <style jsx>{`
      :global(p) {
        padding-bottom: 3rem;
        font-size: 3rem;
      }

      :global(a) {
        font-size: 3rem;
      }

      :global(h1) {
        padding-bottom: 5rem;
        font-size: 5rem;
      }

      :global(h2) {
        padding-bottom: 4rem;
        font-size: 4rem;
      }
    `}</style>
    <Card>
      <Content />
    </Card>
  </Layout>
)

export default Post

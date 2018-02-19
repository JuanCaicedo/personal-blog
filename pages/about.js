import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Talks from '../content/conference-talks.mdx'
import Blog from '../content/blog.mdx'

const Page = () => (
  <Layout title="Juan Caicedo">
    <style jsx>{`
      img {
        width: 250px;
      }
    `}</style>
    <img src="/static/juan.jpg" className="center db mb4 overflow-hidden br2" />
    <Card>
      <AboutMe />
    </Card>
    <Card>
      <Blog />
    </Card>
    <Card>
      <Talks />
    </Card>
  </Layout>
)

export default Page

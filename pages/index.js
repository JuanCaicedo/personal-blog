import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Talks from '../content/conference-talks.mdx'
import Blog from '../content/blog.mdx'

const Page = () => (
  <Layout title="Juan Caicedo">
    <img
      src="/static/juan.jpg"
      className="center db mb4 overflow-hidden br2 w-2/3 block m-auto mb-6"
    />

    <Card>
      <div>
        Hi! I'm Juan Caicedo, a Colombian/Canadian/American full stack JS
        developer.
      </div>
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

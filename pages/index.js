import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Talks from '../content/conference-talks.mdx'
import Blog from '../content/blog.mdx'

const Cards = [
  <div>
    Hi! I'm Juan Caicedo, a Colombian/Canadian/American full-stack JS developer.
  </div>,
  <Blog />,
  <Talks />
]

const Page = ({ json, list }) => (
  <Layout title="Juan Caicedo">
    <img
      src="/static/juan.jpg"
      className="center db mb4 overflow-hidden br2 block m-auto mb-6 w-32 rounded-lg"
    />

    <div>
      {Cards.map((content, i) => <Card key={`card-${i}`}>{content}</Card>)}
    </div>
  </Layout>
)

export default Page

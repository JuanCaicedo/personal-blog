import axios from 'axios'

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

const Page = ({ json }) => (
  <Layout title="Juan Caicedo">
    <img
      src="/static/juan.jpg"
      className="center db mb4 overflow-hidden br2 block m-auto mb-6 w-32 rounded-lg"
    />

    <div>
      {json.time}
      {Cards.map((content, i) => <Card key={`card-${i}`}>{content}</Card>)}
    </div>
  </Layout>
)

Page.getInitialProps = async ({ req }) => {
  try {
    const baseUrl = `${process.env.API_URL}/api/blog`
    const response = await axios(baseUrl)
    const json = response.data
    return { json }
  } catch (e) {
    console.error('e', e)
    return {}
  }
}

export default Page

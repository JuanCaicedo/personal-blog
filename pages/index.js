import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Talks from '../content/conference-talks.mdx'

const Page = () => (
  <Layout title="Juan Caicedo">
    <style jsx>{`
      :global(:first-child) {
        margin-top: 0;
      }
      :global(:last-child) {
        margin-bottom: 0;
      }
    `}</style>
    <Card>
      <AboutMe />
    </Card>
    <Card>
      <Talks />
    </Card>
  </Layout>
)

export default Page

import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Talks from '../content/conference-talks.mdx'
import Blog from '../content/blog.mdx'

const PageCard = ({ children }) => (
  <Card>
    <style jsx>{`
      :global(:first-child) {
        margin-top: 0;
      }
      :global(:last-child) {
        margin-bottom: 0;
      }
      img {
        width: 250px;
      }
    `}</style>
    {children}
  </Card>
)

const Page = () => (
  <Layout title="Juan Caicedo">
    <style jsx>{`
      img {
        width: 250px;
      }
    `}</style>
    <img src="/static/juan.jpg" className="center db mb4 overflow-hidden br2" />
    <PageCard>
      <AboutMe />
    </PageCard>
    <PageCard>
      <Blog />
    </PageCard>
    <PageCard>
      <Talks />
    </PageCard>
  </Layout>
)

export default Page

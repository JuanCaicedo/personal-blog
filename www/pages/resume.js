import Layout from '../layout/Main'
import Content from '../content/resume-2018.mdx'
import Talks from '../content/conference-talks.mdx'
import Card from '../components/Card'

const Resume = () => (
  <Layout title="Resume" size="mw7-ns">
    <Card>
      <Content />
      <Talks />
    </Card>
  </Layout>
)

export default Resume

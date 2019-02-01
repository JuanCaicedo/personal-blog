import Layout from '../layout/Main'
import Card from '../components/Card'
import AboutMe from '../content/about-me.mdx'
import Blog from '../content/blog.mdx'
import ReactMarkdown from 'react-markdown'

const talks = () => {
  return `
## Conference Talks
- Test Driven CSS
  - Revolution Conf, June 2017
  - Stir Trek, May 2017
  - Forward Courses [(online workshop)]( https://forwardcourses.com/workshops/119 )
- Better JSON through streams
  - [Fullstack London 2016]( https://skillsmatter.com/skillscasts/8160-better-json-through-streams )
  - [NationJS NodeDay 2016]( https://vimeopro.com/user24051491/nationjs-node-day-march-11-2016/video/169948440 )
  - KCDC 2016
- Elm => Javascript
  - [JSConf Uruguay 2016]( https://www.youtube.com/watch?v=UmxPZpam7o0 )
- Building Command Line Applications the Node Way
  - JSConf Colombia 2016 (workshop)
`
}

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
      <ReactMarkdown source={talks()} />
    </Card>
  </Layout>
)

export default Page

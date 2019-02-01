import Layout from '../layout/Main'
import Card from '../components/Card'
import ReactMarkdown from 'react-markdown'

const blog = () => {
  return `
## Blog

I've written various blog posts (on here and at
[Medium](https://medium.com/@_juancaicedo)) about my interests in javascript,
emacs, and programming.
`
}

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

const Cards = [
  <div>
    Hi! I'm Juan Caicedo, a Colombian/Canadian/American full-stack JS developer.
  </div>,
  <ReactMarkdown source={blog()} />,
  <ReactMarkdown source={talks()} />
]

const Page = ({ json, list }) => {
  return (
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
}

export default Page

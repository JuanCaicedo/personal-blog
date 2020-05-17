import React from 'react'
import Layout from '../layout/Main'
import Card from '../components/Card'
import ReactMarkdown from 'react-markdown'

const aboutMe = () => {
  return `
## About me

My name is Juan Caicedo, I'm a Colombian/Canadian/American full stack JS developer.

I was born in Montreal to Colombian parents and spent most of my life between
Bogotá and Portland, Oregon. This made me fascinated with how languages work and
how we used them, leading me to pursue a Bachelor of Arts in Linguistics at the
University of British Columbia. That interest lead me to Natural Language
Processing and eventually web development.

After working as a contractor for various government programs in Java, I became
interested in the young Node.js scene and started working for CuriosityMedia on
[SpanishDict.com](http://www.spanishdict.com/) first in the city and afterwards
remotely.

Because I entered programming through a "non-traditional path", I'm really
interested in helping others get started in the industry. When living in
Washington DC I helped establish [NodeSchool
DC](https://nodeschool.io/washingtondc/) and was an organizer for
[NodeDC](https://www.meetup.com/node-dc/). I also give talks an workshops all
over the world to help others learn various javascript topics.
`
}

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

const Page = () => (
  <Layout title="Juan Caicedo">
    <style jsx>{`
      img {
        width: 250px;
      }
    `}</style>
    <img
      src="/static/juan.jpg"
      className="center db mb4 overflow-hidden br2"
      alt="Juan, the type of guy you'd like to have a beer with"
    />
    <Card>
      <ReactMarkdown source={aboutMe()} />,
    </Card>
    <Card>
      <ReactMarkdown source={blog()} />
    </Card>
    <Card>
      <ReactMarkdown source={talks()} />
    </Card>
  </Layout>
)

export default Page

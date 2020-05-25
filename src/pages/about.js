import React from 'react'
import Layout from '../layout/Main'
import Card from '../components/Card'
import JuanImg from '../images/juan.jpg'

function FullCard({ children }) {
  return <Card className="w-full">{children}</Card>
}

const AboutMe = () => {
  return (
    <div>
      <h2>About me</h2>
      <div>
        My name is Juan Caicedo, I'm a Colombian/Canadian/American full stack JS
        developer.
      </div>

      <div>
        I was born in Montreal to Colombian parents and spent most of my life
        between Bogotá and Portland, Oregon. This made me fascinated with how
        languages work and how we used them, leading me to pursue a Bachelor of
        Arts in Linguistics at the University of British Columbia. That interest
        lead me to Natural Language Processing and eventually web development.
      </div>

      <div>
        After working as a contractor for various government programs in Java, I
        became interested in the young Node.js scene and started working for
        CuriosityMedia on{' '}
        <a href="http://www.spanishdict.com/">SpanishDict.com</a> first in the
        city and afterwards remotely.
      </div>

      <div>
        Because I entered programming through a "non-traditional path", I'm
        really interested in helping others get started in the industry. When
        living in Washington DC I helped establish{' '}
        <a href="https://nodeschool.io/washingtondc/">NodeSchool DC</a> and was
        an organizer for
        <a href="https://www.meetup.com/node-dc/">NodeDC</a>. I also give talks
        an workshops all over the world to help others learn various javascript
        topics.
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <div>
        I've written various blog posts (on here and at{' '}
        <a href="https://medium.com/@_juancaicedo">Medium</a>) about my
        interests in javascript, emacs, and programming.
      </div>
    </div>
  )
}

const Talks = () => {
  return (
    <div>
      <h2>Conference Talks</h2>
      <ul>
        <li>
          <div>Test Driven CSS</div>
          <ul>
            <li>Revolution Conf, June 2017</li>
            <li>Stir Trek, May 2017</li>
            <li>
              Forward Courses (
              <a href="https://forwardcourses.com/workshops/119">
                online workshop
              </a>
              )
            </li>
          </ul>
        </li>
        <li>
          <div>Better JSON through streams</div>
          <ul>
            <li>
              <a href="https://skillsmatter.com/skillscasts/8160-better-json-through-streams">
                Fullstack London 2016
              </a>
            </li>

            <li>
              <a href="https://vimeopro.com/user24051491/nationjs-node-day-march-11-2016/video/169948440">
                NationJS NodeDay 2016
              </a>
            </li>
            <li>KCDC 2016</li>
          </ul>
        </li>
        <li>
          <div>Elm => Javascript</div>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=UmxPZpam7o0">
                JSConf Uruguay 2016
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div>Building Command Line Applications, the Node Way</div>
          <ul>
            <li>
              <div>JSConf Colombia 2016 (workshop)</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

const Page = () => (
  <Layout title="Juan Caicedo">
    <div className="overflow-hidden br2 mb-6 max-w-lg rounded-lg">
      <img
        src={JuanImg}
        alt="Juan, the type of guy you'd like to have a beer with"
      />
    </div>

    <FullCard>
      <AboutMe />
    </FullCard>
    <FullCard>
      <Blog />
    </FullCard>
    <FullCard>
      <Talks />
    </FullCard>
  </Layout>
)

export default Page

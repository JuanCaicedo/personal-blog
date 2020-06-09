import React from 'react'
import Layout from '../layout/Main'
import JuanImg from '../images/juan.jpg'

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <div>
        I've written various blog posts (on here and on{' '}
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

const Page = () => {
  return (
    <Layout title="Juan Caicedo">
      <h1 className="text-6xl">Juan Caicedo</h1>
      <div>
        That's me! I'm a Colombian, Canadian, American Full Stack Javascript
        developer.
      </div>
      <div className="overflow-hidden br2 mb-6 max-w-lg rounded-lg mx-auto">
        <img src={JuanImg} alt="Juan, that's me, who this site is about!" />
      </div>

      <Blog />
      <Talks />
    </Layout>
  )
}

export default Page

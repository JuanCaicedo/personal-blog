import Layout from '../layout/Main'
import Card from '../components/Card'
import ReactMarkdown from 'react-markdown'

const resume = () => {
  return `
# Juan Caicedo
- retiredcanadianpoet@gmail.com
- 503-481-2895
- 15755 NW Oak Hills DR
- Beaverton, OR, USA, 97006

## Technical Skills
| Skill                | Time                            |
|----------------------|---------------------------------|
| Software Engineering | 6 years professional experience |
| Node.js              | 4 years                         |
| Javascript           | 4 years                         |
| AWS                  | 4 years                         |
| CSS                  | 3 years                         |
| React                | 2 year                          |
| Elm                  | 1 year                          |

## Experience with
- Remote work (4 years)
- Rich client-side applications
- Micro-service architecture
- Continuous Integration & Delivery
- REST web services & GraphQL
- Unit Testing & Test Driven Development
- SQL, NoSql, Elasticsearch, Redis
- Dev Ops & Docker
- Web performance optimization

## GitHub Profile
https://github.com/JuanCaicedo

## Qualifications
### Education
- Bachelor of Arts, Honours degree in Linguistics
  University of British Columbia (graduated May 2013)
- J2EE training program
  Multivision, Inc (February 2014)

### Certifications
- Oracle Certified Java Associate (Java 1.7)
- BrainBench Java 6 fundamentals

## Employers
- Test Double LLC
  Software Consultant
  (April 2018 - Present)

- Curiosity Media, Inc
  Full Stack Software Engineer
  (February 2015 - October 2017)

- Multivision, Inc
  Java Web Developer
  (September 2013 - February 2015)

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

## Projects
### Circle CI
#### Consulting Achievements
- Coached engineers and product team to communicate in mutually understandable
  terms, leading to better business-value delivery
- Established culture of high-quality software engineering by promoting testing,
  accountability, knowledge sharing, and safe communication
#### Product Achievements
- Launched Orbs registry app, a rich client-side explorer of reusable CI
  configurations, backed by graphql
- Amplified marketing efforts by delivering many high quality pages:
  * [circleci.com/open-source](https://circleci.com/open-source/),
  * [circleci.com/security](https://circleci.com/security/)
- Increased customer conversion rates through revamping subscription UI, while
  beefing up related legacy code

### SpanishDict.com
#### Language learning guide
https://www.spanishdict.com/guide
https://www.spanishdict.com/guide/superlative-adjectives-in-spanish

- Implemented custom markdown syntax to enable content team to easily author
  new articles
- Developed styling for components so they could be used anywhere in an
  article, including nested within each other
- Added backend method for retrieving articles by topic

#### Spelling suggestions
http://www.spanishdict.com/translate/serr

- Created scripts to pull all search query data (10 million queries) from
  Mixpanel API
- Enabled data cleaning and normalization by implementing a Node.js command line
  tool to handle query data as a stream
- Constructed micro-service to retrieve spelling suggestions from Elasticsearch
- Implemented backend logic to route users to top selling suggestion
- Integrated spelling suggestions into UI to give users more insight into how
  they arrived at an entry

#### Quizzes
https://www.spanishdict.com/quizzes/41/ser-vs-estar

- Integrated new React architecture and webpack build into existing server
  rendered pipeline
- Created and styled quiz UI components and interaction logic
- Established single state store using Redux to share state between components
- Added game-like animations to make user experience engaging

### Digital nomadism

Since the summer of 2016, I've been some version of a "digital nomad". I've been
a full-time remote worker, allowing me to live in my birth country while also
delivering high quality work.

During this time I also took extended time off work to travel, while expanding
my skills with cutting edge web technologies through many side projects.
`
}

const Resume = () => (
  <Layout title="Resume" size="mw7-ns">
    <Card>
      <ReactMarkdown source={resume()} />
    </Card>
  </Layout>
)

export default Resume

import React from 'react'
import * as R from 'ramda'
import Link from 'gatsby-link'

import Layout from '../layout/Main'

const ActivityItem = ({ text }) => <li className="text-xl">{`${text}`}</li>

const ActivityList = ({ activities, title }) => {
  return (
    <div>
      <h4 className="mb-4">{title}</h4>
      <ul>
        {R.map(
          (activity, i) => (
            <ActivityItem key={i} text={activity} />
          ),
          activities
        )}
      </ul>
    </div>
  )
}

const Page = () => (
  <Layout title="What I'm doing now">
    <h1 className="text-center mb-8">What I'm doing now</h1>
    <ActivityList
      title="My life at a glance"
      activities={[
        'Living in Portland',
        'Working for Test Double (at Physna)',
        'Playing ukelele',
        'Drawing a pineapple everyday',
      ]}
    />
    <ActivityList title="Goals" activities={['Hike the Pacific Crest Trail']} />
    <div className="text-xl w-full">
      You might also be interested in more{' '}
      <Link to="/about" className="text-xl">
        about me
      </Link>
      , or maybe my{' '}
      <Link to="/resume" className="text-xl">
        resume
      </Link>
      .
    </div>
  </Layout>
)

export default Page

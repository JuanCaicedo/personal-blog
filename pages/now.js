import * as R from 'ramda'
import Link from 'next/link'

import Layout from '../layout/Main'
import Card from '../components/Card'

const ActivityItem = ({ text }) => <li className="text-xl">{`${text}`}</li>

const ActivityList = ({ activities, title }) => {
  return (
    <Card>
      <div>
        <h2 className="text-2xl mb-4">{title}</h2>
        <ul>
          {R.map(activity => <ActivityItem text={activity} />, activities)}
        </ul>
      </div>
    </Card>
  )
}

const Page = () => (
  <Layout title="What I'm doing now">
    <h1 className="text-center mb-8">What I'm doing now</h1>
    <ActivityList
      title="My life at a glance"
      activities={[
        'Living in Medellin',
        'Working for Test Double (at Circle CI)',
        'Playing guitar'
      ]}
    />
    <ActivityList
      title="Goals"
      activities={[
        'Speak at JSConf EU',
        'Compose a rock opera',
        'Write all content in Spanish and English',
        'Attend the Recurse Center'
      ]}
    />
    <ActivityList
      title="Recently Read"
      activities={[
        'Sometimes a Great Notion',
        'Oblivion. A Memoir',
        'Motorcycle Diaries'
      ]}
    />
    <Card className="text-xl">
      You might also be interested in more{' '}
      <Link href="/about">
        <a className="text-xl">about me</a>
      </Link>, or maybe my{' '}
      <Link href="/resume">
        <a className="text-xl">resume</a>
      </Link>.
    </Card>
  </Layout>
)

export default Page

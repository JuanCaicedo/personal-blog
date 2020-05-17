import React from 'react'
import Layout from '../layout/Main'
import Card from '../components/Card'

const Page = () => (
  <Layout title="Portland recommendations">
    <Card className="card w-full">
      <h1>Portland</h1>
      <div>
        <div>Here's what I recommend you should do if you are in Portland!</div>
      </div>
    </Card>
    <Card className="card w-full">
      <h2>Cider tasting</h2>
      <ul>
        <li>
          <a href="https://www.ciderbite.com">Cider Bite</a>
        </li>
        <li>
          <a href="https://avidcider.com">Avid Cider</a>
        </li>
      </ul>
    </Card>
    <Card className="w-full">
      <h2>Hiking</h2>
      <ul>
        <li>
          <a href="https://www.forestparkconservancy.org/forest-park/">
            Forest Park{' '}
          </a>
        </li>
        <li>Eagle Creek</li>
      </ul>
    </Card>
    <Card className="w-full">
      <h2>Food carts</h2>
      <ul>
        <li>
          <a href="http://www.foodcartsportland.com/maps/">Food cart map</a>
        </li>
      </ul>
    </Card>
    <Card className="w-full">
      <h2>Parks and gardens</h2>
      <ul>
        <li>
          <a href="https://www.tripadvisor.com/Attraction_Review-g52024-d563209-Reviews-Cathedral_Park-Portland_Oregon.html">
            Cathedral Park
          </a>
        </li>
        <li>
          <a href="https://japanesegarden.org">Japanese gardens</a>
        </li>
        <li>
          <a href="https://www.atlasobscura.com/places/the-grotto-portland-oregon">
            The Grotto
          </a>
        </li>
      </ul>
    </Card>
  </Layout>
)
export default Page

import React from 'react'
import Layout from '../layout/Main'
import Card from '../components/Card'

const Page = () => (
  <Layout title="Medellin recommendations">
    <style jsx>{`
      :global(.card) {
        text-align: center;
      }
      h1 {
        margin: 0 0 16px;
      }
      h2 {
        margin: 0 0 14px;
      }
    `}</style>
    <Card>
      <h1>Medellín</h1>
      <div>
        This was the place I called home, off and on, between 2016 and 2019.
        It's a wonderful city and one of the most vivid examples of the positive
        changes Colombia has gone through during my lifetime.
      </div>
      <br />
      <div>
        If you're visiting there or living there as a digital nomad, here are
        some of the things I think you should do while you're there.
      </div>
      <br />
      <a href="https://gist.github.com/JuanCaicedo/8a61b1c553275ab0ae4abca98368ef34">
        https://gist.github.com/JuanCaicedo/8a61b1c553275ab0ae4abca98368ef34
      </a>
    </Card>
  </Layout>
)

export default Page

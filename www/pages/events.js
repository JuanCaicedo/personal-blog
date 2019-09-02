import Layout from '../layout/Main';
import Card from '../components/Card';

const Page = () => (
  <Layout title="Events">
    <style jsx>{`
      :global(.card) {
        text-align: center;
      }
      h1 {
        margin-top: 0;
      }
    `}</style>
    <Card className="card">
      <div>
        <h1>Lunch</h1>
        <a href="https://m.facebook.com/events/1853998621412011">https://m.facebook.com/events/1853998621412011</a>
      </div>
      <div>
        <h1>Drinks</h1>
        <a href="https://www.facebook.com/events/373532313290718/">https://www.facebook.com/events/373532313290718/</a>
      </div>

    </Card>
  </Layout>
);
export default Page;

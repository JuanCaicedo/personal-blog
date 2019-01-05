import Layout from '../layout/Main';
import Card from '../components/Card';

const Page = () => (
  <Layout>
    <style jsx>{`
      :global(.card) {
        text-align: center;
      }
      h1 {
        margin-top: 0;
      }
    `}</style>
    <Card className="card">
      <h1>Guatemala</h1>
      <div>
        <div>
          Este doc tiene todas mis recomendaciones de vi viaje a Guatemala 😄
        </div>
        <div>
          <a href="https://gist.github.com/JuanCaicedo/fd20f2415e952ad3ed12eaf1390bd9b6">
            https://gist.github.com/JuanCaicedo/fd20f2415e952ad3ed12eaf1390bd9b6
          </a>
        </div>
      </div>
    </Card>
  </Layout>
);
export default Page;

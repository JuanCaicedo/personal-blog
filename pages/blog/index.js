import Link from 'next/link'
import Layout from '../../layout/Main'
import posts from '../../content/all-posts'
import Card from '../../components/Card'

const Post = () => (
  <Layout title="blog">
    <div>
      {posts.map(({ title, date, slug }, i) => (
        <Card key={i}>
          <div>
            <h3>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <div>{date}</div>
          </div>
        </Card>
      ))}
    </div>
  </Layout>
)

export default Post

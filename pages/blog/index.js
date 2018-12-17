import Link from 'next/link'
import Layout from '../../layout/Main'
import posts from '../../content/all-posts'
import Card from '../../components/Card'

const Post = () => (
  <Layout title="Blog">
    <h1 className="mb-8 text-center">Previous posts</h1>
    <>
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
    </>
  </Layout>
)

export default Post

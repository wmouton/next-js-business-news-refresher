import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=7`);
  const articles = await response.json();

  return {
    props: {
      articles
    }
  }
}

const Home: NextPage = ({articles}) => {
  console.log(articles);
  return (
    <>
      <div>Welcome to Business News</div>
      <div className={styles.container}>
        <Head>
          <title>Business News</title>
          <meta name="description" content="Business news for entrepreneurs." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </>
  )
}

export default Home

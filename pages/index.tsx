import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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

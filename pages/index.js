import Head from 'next/head'
import Card from '../Components/Card'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Folcode</title>
        <meta name="description" content="Folcode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>¿Sabías que..?</h1>
    
      <Card /> 
    
      <footer className={styles.footer}>
        <a className='fotter'
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Folcode '}
          <span className={styles.logo}>
  
          </span>
        </a>
      </footer>
    </div>
    
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div>
     
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus minima nihil tempora modi explicabo, facilis dolorem quasi ad nam error soluta suscipit assumenda voluptate eligendi in quod. Quam, tenetur?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus minima nihil tempora modi explicabo, facilis dolorem quasi ad nam error soluta suscipit assumenda voluptate eligendi in quod. Quam, tenetur?
      </p>

    </div>
  )
}

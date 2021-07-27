import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import StockInput from './stockInput'


export const getStaticProps = async () => {

  const res = await fetch('http://localhost:5000/api/');
  const data = await res.json();

  return {
    props: { options: data }
  }
}


export default function Home({ options }) {
  // console.log(options.result)

  let optionsChain = options.result
  return (



    <div>

      <h1 className={styles.title}>Homepage</h1>

      <StockInput/>

      {optionsChain && optionsChain.map(contract => (
        <div className={styles.optionsChain} key={contract.contractName} >

          <div className={styles.contract} >{contract.lastTradeDate}</div>
          <div className={styles.contract} >{contract.strike}</div>
          <div className={styles.contract} >{contract.lastPrice}</div>
          <div className={styles.contract} >{contract.bid}</div>
          <div className={styles.contract} >{contract.ask}</div>
          <div className={styles.contract} >{contract.change}</div>
          <div className={styles.contract} >{contract.percentChange}</div>
          <div className={styles.contract} >{contract.volume}</div>
          <div className={styles.contract} >{contract.openInterest}</div>
          <div className={styles.contract} >{contract.IV}</div>

        </div>
      ))}



      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus minima nihil tempora modi explicabo, facilis dolorem quasi ad nam error soluta suscipit assumenda voluptate eligendi in quod. Quam, tenetur?
      </p>


    </div>
  )
}

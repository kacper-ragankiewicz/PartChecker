import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

import loop from "../styles/assets/loop.png";
import mark from "../styles/assets/mark.png";
import error from "../styles/assets/error.png";
import processor from "../styles/assets/processor.jpeg";
import processed from "../styles/assets/processed.png";

export default function Home() {
  const [status, setStatus] = useState(true)

  const elementArray = [
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
  ]

  const ElementsGenerator = (props: any) => {

    return(
      <li key={props.key} className={styles.elementsItem}>
        <div className={styles.elementHeader}>
          <h2 className={styles.elementName}>{props.name}</h2>
          <div className={styles.removeElementButton}>
          <Image
            src={error}
            width={48}
            height={48}
            alt='error IMG'
            priority
            className={styles.errorImg}
            />
          </div>
        </div>
        <h3 className={styles.elementDetail}>{props.detail}</h3>
        <div className={styles.elementImgContainer}>
          <Image
            src={processor}
            width={190}
            height={190}
            alt='Element IMG'
            priority
            className={styles.elementImg}
          />
        </div>
        <div className={styles.elementMark}>
          <Image
            src={processed}
            width={48}
            height={48}
            alt='mark IMG'
            className={styles.elementMarkImg}
            priority
          />
        </div>
      </li>
    )
  }

  const elementList = elementArray.map(item => <ElementsGenerator key={item.name} name={item.name} detail={item.detail}/>)



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <nav className={styles.navbarContainer}>
          <h1 className={styles.logoContainer}>Dopasuj<span>CZĘŚĆ</span></h1>
          <div className={styles.loopImgContainer}>
            <Image
              src={loop}
              width={48}
              height={48}
              alt='Loop ICON'
              className={styles.loopIMG}
            />
          </div>
          <form className={styles.form}>
              <input type='text' name='search' placeholder='SZUKAJ CZĘŚCI...' className={styles.searchBar}/>
          </form>
        </nav>
        <div className={styles.wrapper}>
          <div className={styles.wrapperHeader}>
            <h1 className={styles.header}>TWOJE CZĘŚCI KOMPUTEROWE:</h1>
            <div className={styles.statusContainer}>
              <h1 className={styles.status}>STATUS:</h1>
              { status
              ?
                <div className={styles.correct}>
                  <Image
                    src={mark}
                    width={48}
                    height={48}
                    alt='good IMG'
                    priority
                    className={styles.correctImg}
                  />
                </div>
              :
                <div className={styles.error}>
                  <Image
                    src={error}
                    width={48}
                    height={48}
                    alt='error IMG'
                    priority
                    className={styles.errorImg}
                  />
                </div>
              }
            </div>
          </div>
          <div className={styles.elemetsListWrapper}>
            <ul className={styles.elementsList}>
              {elementList}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

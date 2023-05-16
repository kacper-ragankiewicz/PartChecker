import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

import loop from "../styles/assets/loop.png";
import mark from "../styles/assets/mark.png";
import error from "../styles/assets/error.png";
import processor from "../styles/assets/processor.jpeg";
import processed from "../styles/assets/processed.png";
import { arrayBuffer } from 'stream/consumers';

interface MyElement {
  id: number;
  kod: string;
  name: string;
  detail: string;
}

type MyElementArray = MyElement[]

export default function Home() {
  const [status, setStatus] = useState(true)
  const [search, setSearch] = useState("")
  const [searchArray, setSearchArray] = useState([
    {
      id: 1,
      kod: 'sajhasdf',
      name: 'Procesor',
      detail: 'AMD RAR 5 5600'
    },
    {
      id: 8,
      kod: 'kasdjhuih',
      name: 'Procesor',
      detail: 'AMD RAR 5 5600'
    },
  ])
  const [elementArray, setElementArray] = useState([
    {
      id: 1,
      kod: 'sajhasdf',
      name: 'Procesor',
      detail: 'AMD RAR 5 5600'
    },
    {
      id: 2,
      kod: 'sakjdhfkjsahdf',
      name: 'Procesor',
      detail: 'D RAZER 5 5600'
    },
    {
      id: 3,
      kod: 'kasldjflksdhg;h',
      name: 'Procesor',
      detail: 'AMD RAZER 5 50'
    },
    {
      id: 4,
      kod: 'kasdjhfkj',
      name: 'Procesor',
      detail: 'AMD ZER 5 5600'
    },
    {
      id: 5,
      kod: 'klsadjhkuhi',
      name: 'Procesor',
      detail: 'AMD RAZER 5 5600'
    },
    {
      id: 6,
      kod: 'askldjfjklsdf',
      name: 'Procesor',
      detail: 'AMD RAZER 600'
    },
  ])


  const removeElement = (id: number) => {
    let array = elementArray.filter(item => item.id !== id)
    for ( let i = 0; i <= array.length - 1; i++) {
      array[i].id = i + 1
    }

    setElementArray(array)

    return filterSearchArray()
  }

  const filterSearchArray = () => {
    const serchFiltered = searchArray.filter(item => !elementArray.some(element => element['kod'] === item['kod']));
    return setSearchArray(serchFiltered)
  }


  const addElement = (id: number) => {
      setSearch("")
      // if (typeof window !== 'undefined') {
      //   const newLocal = document.getElementById('search')
      //   newLocal.value = ''
      // }
      let array: MyElement[] = [...elementArray]
      let search: MyElement[] = [...searchArray]
      let index  = search.findIndex(item => id === item.id);

      search[index] = {...searchArray[index], id: elementArray.length}

      array.push(search[index])

      for ( let i = 0; i <= array.length - 1; i++) {
        array[i].id = i + 1
      }

      setElementArray(array)
      return
    }

  const handleInputChange = (event: any) => {
    setSearch(event.target.value);

    return filterSearchArray()
  }


  const ElementsGenerator = (props: any) => {

    return(
      <li key={props.key} className={styles.elementsItem}>
        <div className={styles.elementHeader}>
          <h2 className={styles.elementName}>{props.name}{props.kod}</h2>
          <div onClick={() => removeElement(props.id)} className={styles.removeElementButton}>
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

  const SearchGenerator = (props: any) => {
    return(
      <li key={props.key} className={styles.searchItem} onClick={() => addElement(props.id)}>
        <div className={styles.searchImgContainer}>
          <Image
            src={processor}
            width={190}
            height={190}
            alt='Element IMG'
            priority
            className={styles.elementImg}
          />
        </div>
        <h3>{props.kod}</h3>
        <p>{props.detail}</p>
      </li>
    )
  }

  const elementList = elementArray.map(item => <ElementsGenerator key={item.name} id={item.id} name={item.name} detail={item.detail} kod={item.kod}/>)
  const searchList = searchArray.map(item => <SearchGenerator key={item.name} id={item.id} name={item.name} detail={item.detail} kod={item.kod}/>)



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
              <input type='text' id="search" onChange={handleInputChange} name='search' placeholder='SZUKAJ CZĘŚCI...' className={styles.searchBar}/>
              { search !== ""
              ?
                <div className={styles.searchBox}>
                  <ul className={styles.searchList}>
                    {searchList}
                  </ul>
                </div>
              :
                " "
              }
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

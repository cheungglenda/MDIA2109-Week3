import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/about.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {

    const [information, setInformation] = useState([...data])
    console.log(data);

    return (
   <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Meet the Exmployees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>

        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>


        <div className={styles.grid}>
          <div>Business Degrees:</div>
          {information && information.map((info, index) => {
            if(info.department.toLowerCase() === "business") {
            return (
              <Card key={index} degree={info.degree} color="red" font="25px"/>
            )
          }
          })}
           <div>Computing Departments:</div>
          {information && information.map((info, index) => {
            if(info.department.toLowerCase() === "computing") {
            return (
              <Card key={index} degree={info.department} color="blue" font="25px"/>
            )
          }
          })}
        </div>
      </main>
    </>
  )
}
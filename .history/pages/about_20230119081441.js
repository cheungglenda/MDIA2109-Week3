import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/about.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {

    const [aboutEmployees, setaboutEmployees] = useState([...data])
    console.log(data);

    return (
   <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Meet the Employees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.grid}>
          <div>Meet the Employees</div>
          {information && information.map((info, about) => {
            if(info.department.toLowerCase() === "business") {
            return (
              <Card key={about} firstName={info.firstName} color="red" font="25px"/>
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
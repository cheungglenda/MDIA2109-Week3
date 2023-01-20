import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/about.json'
import { useState } from 'react'
import employeeCard from '../components/Card/about'
import Link from 'next/link'

export default function About() {

    const [aboutEmployees, setaboutEmployees] = useState([...aboutdata])
    console.log(aboutdata);

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
          {aboutEmployees && aboutEmployees.map((aboutdata, index) => {
            if(aboutdata.department.toLowerCase() === "business") {
            return (
              <employeeCard key={index} firstName={aboutdata.firstName} color="red" font="25px"/>
            )
          }
          })}
           <div>Computing Departments:</div>
          {aboutEmployees && aboutEmployees.map((aboutdata, index) => {
            if(aboutdata.department.toLowerCase() === "computing") {
            return (
              <employeeCard key={index} department={aboutdata.department} color="blue" font="25px"/>
            )
          }
          })}
        </div>
      </main>
    </>
  )
}
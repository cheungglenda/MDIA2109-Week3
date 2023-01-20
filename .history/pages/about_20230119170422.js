import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import aboutData from '../data/about.json'
import { useState } from 'react'
import EmployeeCard  from '../components/EmployeeCard'
import Link from 'next/link'

export default function About() {

    const [aboutEmployees, setAboutEmployees] = useState([...aboutData])
    console.log(aboutData)
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
          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "jane") {
            return (
              <EmployeeCard key={index} firstname={info.firstName} jobtitle={info.jobTitle} color="red" font="25px"/>
            )
          }
          })}

          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "john") {
            return (
              <EmployeeCard key={index} firstname={info.firstName} jobtitle={info.jobTitle} department={info.department} color="blue" font="25px"/>
            )
          }
          })}

          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "wendy") {
            return (
              <EmployeeCard key={index} firstname={info.firstName} lastname={info.lastname} department={info.department} color="blue" font="25px"/>
            )
          }
          })}
        </div>
      </main>
    </>
  )
}
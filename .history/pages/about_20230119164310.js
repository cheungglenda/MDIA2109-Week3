import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import aboutData from '../data/about.json'
import { useState } from 'react'
import employeeCard  from '../components/EmployeeCard/about'
import Link from 'next/link'

export default function About() {

    const [aboutEmployees, setAboutEmployees] = useState([...aboutData])

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
            if(info.department.toLowerCase() === "business") {
            return (
              <employeeCard key={index} firstname={info.firstName} jobtitle={info.jobTitle} color="red" font="25px"/>
            )
          }
          })}

          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.department.toLowerCase() === "human resources") {
            return (
              <employeeCard key={index} department={info.department} color="blue" font="25px"/>
            )
          }
          })}
        </div>
      </main>
    </>
  )
}
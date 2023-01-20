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
      <p className={styles.description}>
          <Link href="/" className={styles.link}>Home</Link>
        </p>


        <div className={styles.grid}>
          <div className={styles.meetTitle}>Meet the Employees</div>
          <div className={styles.employees}>
          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "jane") {
            return (
              <EmployeeCard 
              key={index} 
              firstname={info.firstName} 
              lastname={info.lastName}
              jobtitle={info.jobTitle} 
              department={info.department}
              yearsworked={info.yearsWorked}
              description={info.description}
              color="#FFE6A7" font="16px"/>
            )
          }
          })}

          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "john") {
            return (
              <EmployeeCard 
              key={index} 
              firstname={info.firstName} 
              lastname={info.lastName}
              jobtitle={info.jobTitle} 
              department={info.department}
              yearsworked={info.yearsWorked}
              description={info.description}
              color="#FFE6A7" font="16px"/>
            )
          }
          })}

          {aboutEmployees && aboutEmployees.map((info, index) => {
            if(info.firstName.toLowerCase() === "wendy") {
            return (
              <EmployeeCard 
              key={index} 
              firstname={info.firstName} 
              lastname={info.lastName}
              jobtitle={info.jobTitle} 
              department={info.department}
              yearsworked={info.yearsWorked}
              description={info.description}
              color="#FFE6A7" font="16px"/>
            )
          }
          })}
          </div>
        </div>
      </main>
    </>
  )
}
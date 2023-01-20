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
        <title>Meet the Employees</title>
        <meta name="description" content="Meet the Employees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.buttons}>
      <Link href="/" className={styles.links}>Home</Link>
      <Link href="/about" className={styles.links}>About</Link>
      <Link href="/" className={styles.links}>Contact</Link>
      </div>

      <div className={styles.meetTitle}>Meet the Employees</div>
      <div className={styles.titleDesc}>We have some of the greatest media professionals here at Pug Media Co. Get to know some of them below!</div>

        <div className={styles.grid}>
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
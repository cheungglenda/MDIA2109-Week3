import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  /** ([...data]) enters the data in the useState and is calling that info. the useState has all the data from the education.json file */
  const [information, setInformation] = useState([...data])
  console.log(data);

  return (
    <>
      <Head>
        <title>Pug Media Co.</title>
        <meta name="description" content="Full-service digital marketing agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.buttons}>
      <Link href="/" className={styles.links}>Home</Link>
      <Link href="../about" className={styles.links}>About</Link>
      <Link href="/" className={styles.links}>Contact</Link>
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
          <div className={styles.description}>
            Pug Media Co. is a full-service digital marketing agency that specializes in SEO, web design, and branding. We have helped many clients from various industries, and hope to help you achieve your goals as well!
          </div>
        </div>


        <div className={styles.grid}>
          <div>A Message from the Owner:</div>
          {information && information.map((info, index) => {
            if(info.firstName.toLowerCase() === "yi") {
              return (
                <EmployeeCard 
                key={index} 
                firstname={info.firstName} 
                lastname={info.lastName}
                jobtitle={info.jobTitle} 
                contact={info.contact}
                description={info.description}
                color="#F4EBD9" font="16px"/>
              )
            }
            })}

        </div>
      </main>
    </>
  )
}

/** .toLowerCase() is input when you don't want to worry about case sensitivity */

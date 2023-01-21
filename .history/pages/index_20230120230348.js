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

        <div className={styles.meetTitle}>Pug Media Co.</div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/office.jpeg"
            width={600}
            height={450}
          />
          <div className={styles.homeDesc}>
            Pug Media Co. is an independent creative full-service media agency developing content on a global scale. <br></br><br></br>The experts here at Pug Media Co. specialize in SEO, web design, and branding. We have helped many clients from various industries, and hope to help you achieve your goals as well!
          </div>
        </div>
        <div className={styles.bottom}>
        <div className={styles.homeDesc}>
        Since 2007, our work has been driven by the higher purpose of growing brands to impact lives. We have helped many different companies become global brands for good in their own ways and enjoy more rewards as a result.<br></br>
          </div>
        <Image
            className={styles.social}
            src="/media.jpeg"
            width={600}
            height={450}
          />
                <Image
            className={styles.social}
            src="/media2.jpeg"
            width={600}
            height={450}
          />
        </div>
        <div className={styles.profiles}>
            {information && information.map((info, index) => {
              if (info.firstName.toLowerCase() === "yi") { 
                return (
                  <Card key={index}
                    image={info.image}
                    firstName={info.firstName}
                    department={info.department}
                    /> 
                )
              }
            })}
          </div>
      </main>
    </>
  )
}

/** .toLowerCase() is input when you don't want to worry about case sensitivity */

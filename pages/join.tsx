import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import CVContainer from "@/components/CVContainer"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import MetaTags from "@/components/MetaTags"
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Layout>
      <GoogleAnalytics />
      <MetaTags title="Dołącz do nas"/>
      <Navbar />
      <Background />
      <CVContainer />
      </Layout>
    </main>
  )
}

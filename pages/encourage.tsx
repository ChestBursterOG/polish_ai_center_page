import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import EncourageContainer from "@/components/EncourageContainer"
import CVContainer from "@/components/CVContainer"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Layout from "@/components/Layout"
import MetaTags from "@/components/MetaTags"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Layout>
        <MetaTags title="Wolontariat"/>
        <GoogleAnalytics />
        <Background />
        <EncourageContainer />
        <CVContainer />
      </Layout>
    </main>
  )
}

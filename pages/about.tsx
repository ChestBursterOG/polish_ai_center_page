import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import AboutContainer from "@/components/AboutContainer"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Layout from "@/components/Layout"
import MetaTags from "@/components/MetaTags"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Layout>
        <MetaTags title="O nas"/>
        <GoogleAnalytics />
        <Background />
        <AboutContainer />
      </Layout>
    </main>
  )
}

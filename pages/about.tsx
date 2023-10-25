import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import AboutContainer from "@/components/AboutContainer"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <GoogleAnalytics />
      <Background />
      <Navbar />
      <AboutContainer />
      <Footer />

    </main>
  )
}

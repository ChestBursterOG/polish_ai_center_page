import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import BackgroundMainPage from "@/components/BackgroundMainPage"
import Background from "@/components/Background"
import Footer from "@/components/Footer"
import CookiesBanner from "@/components/CookiesBanner"
import MainPageContainer from "@/components/MainPageContainer"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"



export default function Home() {

  return (
    <main className={styles.mainContainer}>
      <GoogleAnalytics />
      <BackgroundMainPage />
      <Navbar />
      <MainPageContainer />
      <Footer />
      <CookiesBanner />


    </main>
  )
}

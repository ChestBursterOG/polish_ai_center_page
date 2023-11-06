import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import EducationContainer from "@/components/EducationContainer"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import MetaTags from "@/components/MetaTags"


export default function Home() {
  return (
    <main className={styles.mainContainer}>
    <MetaTags title="Edukacja" />
      <GoogleAnalytics />
      <Navbar />
      <Background />
      <EducationContainer />
    </main>
  )
}

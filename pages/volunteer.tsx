import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import VolunteerContainer from "@/components/VolunteerContainer"
import GoogleAnalytics from "@/components/GoogleAnalytics"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <GoogleAnalytics />
      <Navbar />
      <Background />
      <VolunteerContainer />
    </main>
  )
}

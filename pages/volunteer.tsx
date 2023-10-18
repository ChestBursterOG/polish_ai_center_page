import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import VolunteerContainer from "@/components/VolunteerContainer"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <Background />
      <VolunteerContainer />
    </main>
  )
}

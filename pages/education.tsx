import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Background from "@/components/Background"
import EducationContainer from "@/components/EducationContainer"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <Background />
      <EducationContainer />
    </main>
  )
}

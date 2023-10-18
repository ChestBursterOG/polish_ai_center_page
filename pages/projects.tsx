import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import ProjectsContainer from "@/components/ProjectsContainer"
import '../styles/globals.css'

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Background />
      <Navbar />
      <ProjectsContainer />
      <Footer />

    </main>
  )
}

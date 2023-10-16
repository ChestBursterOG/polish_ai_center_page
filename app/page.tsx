import Image from 'next/image'
import styles from './page.module.css'
import Footer from "@/components/Footer"
import Background from "@/components/Background"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Background />
      <Footer />

    </main>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Background from "@/components/Background"
import ProjectsContainer from "@/components/ProjectsContainer"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"
import LoadingScreenController from "@/components/LoadingScreenController"
import MetaTags from "@/components/MetaTags"
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Layout>
    <MetaTags title="Projekty" />
      <GoogleAnalytics />
      <LoadingScreenController />
      <Background />
      <Navbar />
      <ProjectsContainer />
      <Footer />
      </Layout>

    </main>
  )
}

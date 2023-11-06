import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import LoadingScreen from "@/components/LoadingScreen"
import LoadingScreenController from "@/components/LoadingScreenController"
import Layout from "@/components/Layout"
import MetaTags from "@/components/MetaTags"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'PCSI',
  description: 'PCSI - Polskie Centrum Sztucznej Inteligencji',
  icons: {
    icon: [{ url: '/CPU-lightnings.gif' }]
  },
  viewport: 'width=device-width, initial-scale=1.0',
  author: 'PCSI',
  keywords: 'Sztuczna inteligencja, AI, innowacje iechnologiczne, technologie przyszłości, automatyzacja, świadomość, edukacja, rozwój',
  robots: 'index, follow',
  openGraph: {
    title: 'PCSI',
    description : 'PCSI - Polskie Centrum Sztucznej Inteligencji',
    image: '/PCSI - logo.png',
    url: 'https://www.polskiecentrumsi.pl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCSI',
    description: 'Technology driving your future',
    image: '/PCSI - logo.png',
  },
  
}
 

export default function Home() {

  {/*

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

*/}

  return (
    <main className={styles.mainContainer}>
    <MetaTags title="PCSI" />
    <GoogleAnalytics />
      {/*{loading && <LoadingScreen/>}*/}
      <Layout>
        <BackgroundMainPage />
        <MainPageContainer />
      </Layout>
    </main>
  )
}

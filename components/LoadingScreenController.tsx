"use client"
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



const LoadingScreenController = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
    </div>
      
  )

  
}

export default LoadingScreenController;
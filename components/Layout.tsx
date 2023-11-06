import React  from 'react';
import styles from './page.module.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CookiesBanner from "@/components/CookiesBanner"
import '../styles/globals.css'
import GoogleAnalytics from "@/components/GoogleAnalytics"
import LoadingScreenController from "@/components/LoadingScreenController"

const Layout = ({ children }) => {
  return (
    <div>
      <GoogleAnalytics />
      <LoadingScreenController />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookiesBanner />

    </div>
  );
};

export default Layout;
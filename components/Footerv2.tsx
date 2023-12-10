"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // Import the CSS module

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <img src="/PCSI_logo.png" alt="Logo" width="200px" />
        <div className={styles.socialMediaLinks}>
          Your social media links here
        </div>
      </div>

      <div className={`${styles.footerSection} ${styles.alignRight} text-gray-500 `}>
      fundacja@polskiecentrumsi.pl
      </div>
      
      <div className={`${styles.footerSection} ${styles.alignRight} text-gray-300`}>
        <ul>
          <li><Link href="/https://deeptechlabs.notion.site/randomIDE-polityka-prywatno-ci-f7d1b381a1ff471ebd373b6fd930ac1e?pvs=4">Polityka prywatności</Link></li>
          <li><Link href="/join">Kariera</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
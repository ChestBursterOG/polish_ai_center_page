"use client"
import React, { useEffect } from 'react';
import styles from './BackgroundMainPage.module.css';

const Footer = () => {
  useEffect(() => {
    const imgContainer = document.querySelector(`.${styles.imgContainer}`);
    const glow = document.querySelector(`.${styles.glow}`);

    if (!imgContainer || !glow) {
      console.error('Image container or glow element not found');
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = imgContainer.getBoundingClientRect();

      // Calculate the position of the cursor relative to the image container
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      // Update the glow position based on the cursor position
      const translateX = (x - 0.5) * 20; // Adjust the multiplier as needed
      const translateY = (y - 0.5) * 20; // Adjust the multiplier as needed


      (glow as HTMLElement).style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [styles.imgContainer, styles.glow]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.layers}>
        <div className={styles.glow} />
        <div className={styles.imgContainer}>
          <img className={styles.image} src="/CPU-lightnings.gif" alt="Lightning animation" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

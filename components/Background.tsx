import React, { useEffect } from 'react';
import Image from 'next/image'
import styles from './Background.module.css'

const Footer = () => {

	useEffect(() => {
    const imgContainer = document.querySelector(`.${styles.imgContainer}`);
    const glow = document.querySelector(`.${styles.glow}`);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = imgContainer.getBoundingClientRect();

      // Calculate the position of the cursor relative to the image container
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      // Update the glow position based on the cursor position
      const translateX = (x - 0.5) * 50; // Adjust the multiplier as needed
      const translateY = (y - 0.5) * 50; // Adjust the multiplier as needed

      glow.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


	return (
		<div className={styles.mainContainer}>
			<div className={styles.layers}>
				<div className={styles.glow} />
				<div className={styles.imgContainer}>
					<img className={styles.image} src="/CPU-lightnings.gif" />
				</div>
			</div>
		</div>
		);
};

export default Footer;


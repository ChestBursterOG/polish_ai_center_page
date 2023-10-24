"use client";
import {useState, useEffect} from 'react';
import styles from './MainPageContainer.module.css';


const Footer = () => {

    const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>Tworzymy przyszłość dzięki sztucznej inteligencji</p>
            <p className={styles.subtitle}>Przekraczamy granice wiedzy, by uczynić technologię dostępną dla każdego. Nasza fundacja buduje nową erę innowacji i edukacji</p>
            <div className={`${styles.subContainer} ${isVisible ? styles.unvisible : styles.visible}`}>
                <div className={styles.box}>
                    <img className={styles.image} src="/mainpage/education.png" />
                    <p className={styles.boxTitle}>Rozwój</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/mainpage/development.png" />
                    <p className={styles.boxTitle}>Edukacja</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/mainpage/training.png" />
                    <p className={styles.boxTitle}>Szkolenia</p>
                </div>
            </div>
            <p className={`${styles.pTitle} ${isVisible ? styles.unvisible : styles.visible}`}>Nasi partnerzy:</p>
            <div className={`${styles.pMainContainer} ${isVisible ? styles.unvisible : styles.visible}`}>
                <div className={styles.pContainer}>
                    <img className={styles.pImage} src="/logos/Deeptechlabs.png" />
                </div>
                <div className={styles.pContainer}>
                    <img className={styles.pImage} src="/logos/napotege.png" />
                </div>
            </div>
        </div>
    );
}

export default Footer;

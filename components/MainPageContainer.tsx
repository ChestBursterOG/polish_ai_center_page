"use client";
import {useState, useEffect} from 'react';
import styles from './MainPageContainer.module.css';
import Slider from '@/components/Slider';
import EntryGraphic from './EntryGraphic';


const Footer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialVisibility = localStorage.getItem('isVisible') === 'true';
    }
  }, []);

  

    const [isVisible, setVisible] = useState(true);

    const images = [
      './slider/KSZ05911-01.jpeg',
      './slider/KSZ05834-01.jpeg',
      './slider/KSZ05852-01.jpeg',
      './slider/KSZ05869-01.jpeg',
      './slider/KSZ05899-01.jpeg',
      './slider/KSZ05905-01.jpeg',
      
    ];

    const scrollDown = () => {
      const windowHeight = window.innerHeight;
      const newScrollPosition = window.scrollY + windowHeight - windowHeight* 0.2;
  
      window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth',
      });
    };

    const handleJoinNowClick = (): void => {
      window.location.href = '/education';
    };

    const handleApplyNowClick = (): void => {
      window.location.href = '/join';
    };

    const handleCheckProjectsClick = (): void => {
      window.location.href = '/projects';
    };

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

  useEffect(() => {
    localStorage.setItem('isVisible', String(isVisible));
  }, [isVisible]);


    return (
        <div className={styles.mainContainer}>
          <EntryGraphic/>
            <p className={styles.title}>Tworzymy przyszłość dzięki sztucznej inteligencji</p>
            <p className={styles.subtitle}>Przekraczamy granice wiedzy, by uczynić technologię dostępną dla każdego. Nasza fundacja buduje nową erę innowacji i edukacji</p>        
            <div className={styles.encourageMainContainer}>
              <div className={styles.encourageContainer} id={styles.id1}>
                  <img className={styles.eImage} src="/mainpage/signup-training.jpg" />
                  <button className={styles.eButton} onClick={handleApplyNowClick}>Zapisz się na szkolenie</button>
              </div>
              <div className={styles.encourageContainer} id={styles.id2}>
                  <img className={styles.eImage} src="/mainpage/team.jpg" />
                  <button className={styles.eButton} onClick={handleJoinNowClick}>Dołącz do zespołu</button>
              </div>
            </div> 
            <div className={`${styles.scrollBackground} ${isVisible ? styles.visible : styles.unvisible}`}>
              <div className={styles.scroll}>
                <button className={styles.eButton} id={styles.scrollBtn} onClick={scrollDown}>Zobacz więcej</button>
              </div>
              </div>
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
            <p className={`${styles.description} ${isVisible ? styles.unvisible : styles.visible}`}><b>Polskie Centrum Sztucznej Inteligencji</b> to fundacja, która koncentruje się na promowaniu wiedzy i rozwijaniu kompetencji w zakresie AI wśród polskich instytucji i społeczeństwa. <br /><br />Działając na rzecz edukacji i innowacji, PCSI  angażuje się w różnorodne projekty badawcze, inicjatywy edukacyjne oraz wydarzenia, mające na celu podnoszenie świadomości znaczenia sztucznej inteligencji. Stanowimy platformę współpracy dla naukowców, technologów
i przedsiębiorców, którzy wspólnie pracują nad kształtowaniem przyszłości technologii AI w Polsce.</p>
            <Slider images={images} />
            <div>
              <button className={styles.eButton} id={styles.centerButton} onClick={handleCheckProjectsClick}>Poznaj nasze projekty</button>
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

"use client";
import {useState, useEffect} from 'react';
import styles from './MainPageContainer.module.css';
import Slider from '@/components/Slider';
import EntryGraphic from './EntryGraphic';
import Link from 'next/link';


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
            <Link href="/projects" className={styles.aiassistantscontainer}>
                <img className={styles.icon} src="/mainpage/AppUses5.png" />
                <p className={styles.boxTitle}>Asystenci AI dla firm</p>
            </Link>
            <div className={styles.encourageMainContainer}>
              <div className={styles.encourageContainer} id={styles.id1}>
                  <img className={styles.eImage} src="/mainpage/signup-training.jpg" />
                  <button className={styles.eButton} id={styles.encourageButton} onClick={handleJoinNowClick}>Zapisz się na szkolenie</button>
              </div>
              <div className={styles.encourageContainer} id={styles.id2}>
                  <img className={styles.eImage} src="/mainpage/team.jpg" />
                  <button className={styles.eButton} id={styles.encourageButton} onClick={handleApplyNowClick}>Dołącz do zespołu</button>
              </div>
            </div> 
            <div className={`${styles.scrollBackground} ${isVisible ? styles.visible : styles.unvisible}`}>
              <div className={styles.scroll}>
                <button className={styles.eButton} id={styles.scrollBtn} onClick={scrollDown}>Zobacz więcej</button>
              </div>
              </div>
            <div className={`${styles.subContainer} ${isVisible ? styles.unvisible : styles.visible}`}>
                <Link href="/encourage">
                  <div className={styles.box}>
                      <img className={styles.image} src="/mainpage/image1(alpha).png" />
                      <p className={styles.boxTitle}>Dołącz do nas</p>
                  </div>
                </Link>

                <div className={styles.box}>
                    <img className={styles.image} src="/mainpage/image2.jpeg" />
                    <p className={styles.boxTitle}>Asystenci AI</p>
                </div>
                <Link href="/education">
                  <div className={styles.box}>
                      <img className={styles.image} src="/mainpage/image3.jpeg" />
                      <p className={styles.boxTitle}>Szkolenia</p>
                  </div>
                </Link>
            </div>
            <div className={`${styles.description} ${isVisible ? styles.unvisible : styles.visible}`}>
              <p className={styles.pcsititle}><b>Polskie Centrum Sztucznej Inteligencji</b></p>
              <div className={styles.iconscontainer}>
                <div>
                  <img className={styles.icon} src="/mainpage/projects.png" />
                  <p className={styles.boxTitle}>Projekty badawcze</p>
                </div>
                <div>
                  <img className={styles.icon} src="/mainpage/educationgraphic.png" />
                  <p className={styles.boxTitle}>Nowy system edukacji</p>
                </div>
                <div>
                  <img className={styles.icon} src="/mainpage/events.png" />
                  <p className={styles.boxTitle}>Eventy</p>
                </div>
              </div>
              <br />Stanowimy platformę współpracy dla naukowców, technologów
                  i przedsiębiorców, którzy wspólnie pracują nad kształtowaniem przyszłości technologii AI w Polsce.
            </div>
            
            <Link href="/projects" className={styles.projects}>
                <img className={styles.icon} src="/mainpage/AppUses1.png" />
                <p className={styles.boxTitle}>Tutaj powstają nasze projekty.</p>
                <p>Sprawdź nad czym pracujemy!</p>
            </Link>
            {/*}
            <Slider images={images} />
            
            <p className={`${styles.pTitle} ${isVisible ? styles.unvisible : styles.visible}`}>Nasi partnerzy:</p>
            <div className={`${styles.pMainContainer} ${isVisible ? styles.unvisible : styles.visible}`}>
                <div className={styles.pContainer}>
                    <img className={styles.pImage} src="/logos/Deeptechlabs.png" />
                </div>
                <div className={styles.pContainer}>
                    <img className={styles.pImage} src="/logos/napotege.png" />
                </div>
            </div>
        */}
        </div>
    );
}

export default Footer;

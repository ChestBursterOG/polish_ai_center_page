"use client";
import React, { useState, useEffect } from 'react';
import styles from './EntryGraphic.module.css';

const useCookieVisibility = (isVisibleCookieName: string) => {
  // Initialize visibility to false to prevent initial visibility
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const entryGraphicCookie = document.cookie
        .split('; ')
        .find(row => row.trim().startsWith(`${isVisibleCookieName}=`));

      // Default visibility to true only if the cookie is not set
      const isCookieVisible = entryGraphicCookie ? entryGraphicCookie.split('=')[1] === 'true' : true;
      setIsVisible(isCookieVisible);
    }
  }, [isVisibleCookieName]);

  return [isVisible, setIsVisible] as const;
};

const EntryGraphic: React.FC = () => {
  const isVisibleCookieName = 'entryGraphicVisible';
  const [isVisible, setIsVisible] = useCookieVisibility(isVisibleCookieName);

  const handleCloseClick = (): void => {
    setIsVisible(false);
    document.cookie = `${isVisibleCookieName}=false; path=/; max-age=3600`;
  };

  const handleApplyNowClick = (): void => {
    handleCloseClick();
    window.location.href = '/join';
  };

  return (
    <div className={styles.mainContainer} style={{ display: isVisible ? 'block' : 'none' }}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="/EncourageBackground_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className={styles.close} src="/close.svg" alt="Close" onClick={handleCloseClick} />
      <div className={styles.subContainer}>
        <div className={styles.stackContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Zbuduj z nami przyszłość sztucznej inteligencji! </p>
          </div>
          <div className={styles.blurredBackground}>
            <div className={styles.details}>
              <p className={styles.subtitle}>Tworzymy innowacje, inspirujemy, poszukujemy pasjonatów!</p>
              <p className={styles.encourage}>Dołącz do nas już dziś!</p>
              <p className={styles.encourage2}>Fundacja Polskie Centrum Sztucznej Inteligencji</p>
              <button className={styles.join} onClick={handleApplyNowClick}>
                Dołącz do nas!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryGraphic;

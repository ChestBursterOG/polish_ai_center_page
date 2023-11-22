import React, { useState, useEffect } from 'react';
import styles from './EntryGraphic.module.css';

const EntryGraphic: React.FC = () => {
  const isEntryGraphicVisible = (): boolean => {
    const entryGraphicCookie = document.cookie.replace(/(?:(?:^|.*;\s*)entryGraphicClosed\s*=\s*([^;]*).*$)|^.*$/, '$1');
    return entryGraphicCookie !== 'true';
  };

  const [isVisible, setIsVisible] = useState<boolean>(isEntryGraphicVisible());

  const handleCloseClick = (): void => {
    setIsVisible(false);
    document.cookie = 'entryGraphicClosed=true; max-age=3600';
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
              <button className={styles.join} onClick={handleApplyNowClick}>
                Aplikuj teraz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryGraphic;

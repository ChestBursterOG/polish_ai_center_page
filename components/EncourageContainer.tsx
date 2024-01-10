"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './EncourageContainer.module.css';


const EncourageContainer = () => {

    const handleJoinNowClick = (): void => {
        window.location.href = '/join';
      };


    return (
        <div className={styles.mainContainer}>
            <img className={styles.image} src="/join/team.jpg" />
            <div className={styles.description}>
                <p className={styles.title}>Zapraszamy do Aktywnego Udziału: Razem dla Technologicznej Przyszłości</p>
                <p className={styles.subtitle}>Dołącz do naszego zespołu wolontariuszy i być częścią rewolucji w dziedzinie sztucznej inteligencji i nowych technologii! Twoja pasja i zaangażowanie mogą sprawić, że świat stanie się lepszym miejscem poprzez promowanie edukacji, świadomości i innowacyjnych rozwiązań. Razem możemy kształtować przyszłość. Dołącz już dziś i zobacz, jak Twoje działania mogą mieć realny wpływ na rozwój technologiczny i społeczeństwo! </p>
                
            </div>
        </div>
    );
}

export default EncourageContainer;

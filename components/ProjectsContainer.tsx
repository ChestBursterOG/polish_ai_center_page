"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './ProjectsContainer.module.css';


const Footer = () => {


    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>Odkryj fascynujący świat naszych projektów, gdzie technologia spotyka się z innowacją, a pomysły przekształcają się w rzeczywistość. Każdy projekt naszej fundacji to historia pasji, kreatywności i zaangażowania, która inspiruje i zmienia świat.</p>
            <div className={styles.subContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.image} src="/logos/Deeptechlabs.png" />
                </div>
                <div className={styles.description}>
                    <p className={styles.pTitle}>deeptechlabs</p>
                    <p className={styles.pDescription}>deeptechlabs to laboratorium zaawansaowanych technologii, gdzie za cel stawiamy sobie zapewnienie, by polskie przedsiębiorstwa miały dostęp do najbardziej zaawansowanych technologii. Nasza misja to wsparcie firm w adaptacji innowacji, takich jak sztuczna inteligencja, robotyka czy blockchain. Oferujemy nie tylko doradztwo, ale również praktyczne wdrożenia technologii, które mają potencjał zrewolucjonizować rynek.</p>
                </div>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.image} src="/logos/napotege.png" />
                </div>
                <div className={styles.description}>
                    <p className={styles.pTitle}>Na Potęgę</p>
                    <p className={styles.pDescription}>NaPotęgę jest miejscem, gdzie profesjonaliści z branży spotykają się, aby dzielić się wiedzą, doświadczeniami i nawiązywać nowe kontakty. Ułatwiamy dostęp oraz przyśpieszamy adopcję Web3.</p>
                </div>
            </div>
            <div className={styles.subContainer}>
            </div>
            <div className={styles.subContainer}>
            </div>
            
        </div>
    );
}

export default Footer;

"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './AboutContainer.module.css';


const Footer = () => {


    return (
        <div className={styles.mainContainer}>
            <p className={styles.mainTitle}>Odkryj z nami potencjał sztucznej inteligencji – Twoja przyszłość zaczyna się tutaj!</p>
            <div className={styles.subContainer}>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/technology.jpg" />
                    <p className={styles.title}>Dostęp do technologii dla wszystkich</p>
                    <p className={styles.subtitle}>Rozwijamy projekty zapewniające łatwy dostęp do najnowszych technologii sztucznej inteligencji</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/education.jpg" />
                    <p className={styles.title}>Wsparcie edukacyjne w IT</p>
                    <p className={styles.subtitle}>Organizujemy warsztaty i oferujemy materiały edukacyjne, które pomagają zrozumieć skomplikowane zagadnienia IT.</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/career.jpg" />
                    <p className={styles.title}>Wsparcie w rozwoju zawodowym</p>
                    <p className={styles.subtitle}>Pomagamy w kształtowaniu ścieżki zawodowej, oferując mentoring i wsparcie w rozwoju umiejętności.</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/enterprise.jpg" />
                    <p className={styles.title}>Wspieranie przedsiębiorczości</p>
                    <p className={styles.subtitle}>Inspirujemy i wspieramy przedsiębiorców, pomagając im rozwijać innowacyjne projekty z wykorzystaniem sztucznej inteligencji</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/career-plan.jpg" />
                    <p className={styles.title}>Planowanie kariery zawodowej</p>
                    <p className={styles.subtitle}>Udostępniamy narzędzia i wskazówki, które pomagają w planowaniu kariery w dynamicznym świecie technologii</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/tools.jpg" />
                    <p className={styles.title}>Tworzenie innowacyjnych narzędzi i aplikacji</p>
                    <p className={styles.subtitle}>Nasze zespoły projektowe pracują nad tworzeniem nowatorskich narzędzi, które wykorzystują potencjał sztucznej inteligencji</p>
                </div>
                <div className={styles.box}>
                    <img className={styles.image} src="/about/awareness.jpg" />
                    <p className={styles.title}>Budowanie świadomości o nowych technologiach</p>
                    <p className={styles.subtitle}>Organizujemy wydarzenia, seminaria i kampanie, aby zwiększać świadomość społeczeństwa na temat sztucznej inteligencji i jej potencjału</p>
                </div>
            </div>
            <div className={styles.titleBox}>
                <p>Nasz zespół:</p>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.box2}>
                    <img className={styles.image2} src="/team/Rafał.png" />
                    <p className={styles.boxTitle2}>Rafał Szuwalski</p>
                </div>
                <div className={styles.box2}>
                    <img className={styles.image2} src="/team/Łukasz.png" />
                    <p className={styles.boxTitle2}>Łukasz Musiel</p>
                </div>
                <div className={styles.box2}>
                    <img className={styles.image2} src="/team/Arkadiusz.png" />
                    <p className={styles.boxTitle2}>Arkadiusz Firysiuk</p>
                </div>
                <div className={styles.box2}>
                    <img className={styles.image2} src="/team/Katarzyna.png" />
                    <p className={styles.boxTitle2}>Katarzyna Szawłoga</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

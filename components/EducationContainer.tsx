"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './EducationContainer.module.css';


const Footer = () => {


    return (
        <div className={styles.mainContainer}>
        <p className={styles.title}>Witaj w sercu naszych wydarzeń! Nasza fundacja to nie tylko technologia, to także spotkania, warsztaty i inspirujące prelekcje. Odkryj świat możliwości podczas naszych eventów, gdzie innowacyjne pomysły przenoszą się ze słów do czynów</p>
            <div className={styles.subContainer}>
                <img className={styles.image} src="/events/Prompt-engineering.jpg" />
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>Szkolenie Prompt Engineering</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>08.11.2023</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>Lublin</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>Online</p>
                        </div>
                        <p className={styles.eventDescription}>Gotowi rozwinąć skrzydła w świecie innowacyjnych technologii? Nasze szkolenie z prompt engineering to klucz do odkrycia potencjału sztucznej inteligencji w Twoich rękach. Poznaj techniki, które zmienią sposób, w jaki myślisz o programowaniu, i naucz się tworzyć nowatorskie rozwiązania, które przekształcą przyszłość. Dołącz do nas, aby zdobyć niezbędne umiejętności, by stać się pionierem w dziedzinie sztucznej inteligencji. Nie przegap tej unikalnej okazji do rozwoju i eksploracji nowych horyzontów technologicznych! Nie przegap okazji!</p>
                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <img className={styles.image} src="/events/Marketing.jpg" />
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>Szkolenie Marketing</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>13.11.2023</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>Lublin</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>Online</p>
                        </div>
                        <p className={styles.eventDescription}>Marzysz o opanowaniu tajników marketingu, które przyciągną uwagę, zainspirują i przekonają każdego klienta? Nasze szkolenie z marketingu to klucz do odkrywania kreatywnych strategii, nowoczesnych narzędzi i najnowszych trendów, które sprawią, że Twoje kampanie staną się niezapomniane. Dołącz do naszej pasjonującej podróży przez świat marketingowych innowacji, gdzie poznasz nie tylko teorię, ale także praktyczne umiejętności, które pomogą Ci odnieść sukces w dzisiejszym konkurencyjnym świecie biznesu. Bądź liderem w swojej branży - zaczynaj swoją przygodę z marketingiem już teraz!</p>
                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <img className={styles.image} src="/events/Prompt-engineering.jpg" />
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>Szkolenie Prompt Engineering</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>17.11.2023</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>Lublin</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>Online</p>
                        </div>
                        <p className={styles.eventDescription}>Gotowi rozwinąć skrzydła w świecie innowacyjnych technologii? Nasze szkolenie z prompt engineering to klucz do odkrycia potencjału sztucznej inteligencji w Twoich rękach. Poznaj techniki, które zmienią sposób, w jaki myślisz o programowaniu, i naucz się tworzyć nowatorskie rozwiązania, które przekształcą przyszłość. Dołącz do nas, aby zdobyć niezbędne umiejętności, by stać się pionierem w dziedzinie sztucznej inteligencji. Nie przegap tej unikalnej okazji do rozwoju i eksploracji nowych horyzontów technologicznych! Nie przegap okazji!</p>
                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <img className={styles.image} src="/events/Career-planning.jpg" />
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>Szkolenie z planowania kariery</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>21.11.2023</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>Lublin</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>Online</p>
                        </div>
                        <p className={styles.eventDescription}>Twoja kariera zawodowa jest Twoim najważniejszym projektem – pozwól nam pomóc Ci go zaplanować! Nasze szkolenie z planowania kariery zawodowej to mapa drogowa do sukcesu i spełnienia zawodowego. Dzięki naszym ekspertom odkryjesz swoje pasje, umiejętności i cele, które pomogą Ci osiągnąć satysfakcję zawodową. Poznaj skuteczne strategie, zdobądź wskazówki od mentorów i przygotuj się na drogę ku wymarzonej karierze. Nie czekaj – zainwestuj w swoją przyszłość już dziś i zdobądź kluczowe umiejętności potrzebne do osiągnięcia sukcesu zawodowego!</p>
                    </div>
                </div>
            </div>
            <div className={styles.subContainer}>
                <img className={styles.image} src="/events/Prompt-engineering.jpg" />
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>Szkolenie Prompt Engineering</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>27.11.2023</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>Lublin</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>Online</p>
                        </div>
                        <p className={styles.eventDescription}>Gotowi rozwinąć skrzydła w świecie innowacyjnych technologii? Nasze szkolenie z prompt engineering to klucz do odkrycia potencjału sztucznej inteligencji w Twoich rękach. Poznaj techniki, które zmienią sposób, w jaki myślisz o programowaniu, i naucz się tworzyć nowatorskie rozwiązania, które przekształcą przyszłość. Dołącz do nas, aby zdobyć niezbędne umiejętności, by stać się pionierem w dziedzinie sztucznej inteligencji. Nie przegap tej unikalnej okazji do rozwoju i eksploracji nowych horyzontów technologicznych! Nie przegap okazji!</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;

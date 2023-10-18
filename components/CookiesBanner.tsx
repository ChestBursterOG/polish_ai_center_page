"use client"

import React, {useState, useEffect} from 'react';
import styles from './CookiesBanner.module.css';
import { setCookie, getCookie } from 'cookies-next';



const CookiesBanner = () => {

    const [isVisible, setIsVisible] = useState(false);

    const cookiesAccepted = getCookie('cookiesAccepted');

    

    useEffect(() => {

        if (cookiesAccepted === undefined) {
            setIsVisible(true);


        }

        

    })

    function acceptCookies() {
        setCookie('cookiesAccepted', true);
        setIsVisible(false);
    }

    function declineCookies() {
        setCookie('cookiesAccepted', false);
        setIsVisible(false);
    }
    


    return (
        <div className={`styles.container ${isVisible ? styles.container : styles.unvisible}`}>
            <div className={styles.subcontainer}>
                <p>Nasza strona wykorzystuje pliki cookies w celu zapewnienia poprawnego działania serwisu oraz zbierania anonimowych danych do celów analitycznych. Szanujemy Twoją prywatność, dlatego masz możliwość niezgody na używanie plików cookies, które nie są niezbędne do działania strony. Więcej informacji znajdziesz w naszej <a href="https://deeptechlabs.notion.site/randomIDE-polityka-prywatno-ci-f7d1b381a1ff471ebd373b6fd930ac1e?pvs=4">Polityce prywatności</a>.</p>
                <div className={styles.buttons}>
                    <button className={styles.accept} onClick={acceptCookies}>Zgadzam się</button>
                    <button className={styles.decline} onClick={declineCookies}>Odrzucam</button>
                </div>
            </div>
        </div>
    );
}

export default CookiesBanner;

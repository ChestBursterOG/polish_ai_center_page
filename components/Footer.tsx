"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './Footer.module.css';


const Footer = () => {


    let [listToggled, setListToggled] = useState(false);

    const [isHidden, setIsHidden] = useState<null | boolean>(null);

useEffect(() => {
    // Function to update screenWidth when the window is resized
    function handleResize() {
        if (window.innerWidth > 768){
            setIsHidden(false);
        }
        else {
            setIsHidden(true);
        }
    }

    if (window.innerWidth > 768)
        setIsHidden(false);
    else {
        setIsHidden(true);
    }

    // Add an event listener to update screenWidth on window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


        const toggleList = () => {


            if (listToggled == false) {
                setListToggled(true);
            }
            else {
                setListToggled(false);
            }

        }



    return (
        <div>
            <div className={styles.container}>
                <div className={`styles.contentHidden ${isHidden ? styles.contentVisible : styles.contentVisible}`}>
                    <div className={styles.subcontainer}>
                       <a href="https://deeptechlabs.notion.site/randomIDE-polityka-prywatno-ci-f7d1b381a1ff471ebd373b6fd930ac1e?pvs=4">Polityka prywatności</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;

"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './EducationSubContainer.module.css';
import axios from 'axios';
import LoadingSpinner from "@/components/LoadingSpinner"

interface EducationSubContainerProps {
  title: string;
  date: string;
  place: string;
  mode: string;
  description: string;
  link: string;
}

const EducationSubContainer: React.FC<ProjectsSubContainerProps> = ({title, date, place, mode, description, link}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

      const handleImageLoad = () => {
        setImageLoaded(true);
      };

      const handleImageError = () => {
        // Handle image loading error if necessary
        setImageLoaded(true); // Set imageLoaded to true even in case of an error to avoid infinite loading screen
      };


    return (
            <div className={styles.subContainer}>
                <div className={styles.logoContainer}>
                    {!imageLoaded && <LoadingSpinner />}
                    <img
                        className={`${styles.image} ${imageLoaded ? styles.loaded : styles.hidden}`} // Apply styles based on imageLoaded state
                        src={link}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        alt="Project Image"
                    />
                </div>
                <div className={styles.description}>
                    <div className={styles.details}>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Nazwa:</p>
                            <p>{title}</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Data:</p>
                            <p>{date}</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Miejsce:</p>
                            <p>{place}</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <p className={styles.detail}>Tryb:</p>
                            <p>{mode}</p>
                        </div>
                        <p className={styles.eventDescription}>{description}</p>
                    </div>
                </div>
            </div>
    );
}

export default EducationSubContainer;

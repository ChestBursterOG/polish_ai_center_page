"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './ProjectsSubContainer.module.css';
import axios from 'axios';
import LoadingSpinner from "@/components/LoadingSpinner"

interface ProjectsSubContainerProps {
  title: string;
  description: string;
  link: string;
}

const ProjectsSubContainer: React.FC<ProjectsSubContainerProps> = ({title, description, link}) => {
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
                    <p className={styles.pTitle}>{title}</p>
                    <p className={styles.pDescription}>{description}</p>
                </div>
            </div>
    );
}

export default ProjectsSubContainer;

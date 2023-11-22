import React from 'react';
import styles from './LoadingContainer.module.css'
import LoadingSpinner from "@/components/LoadingSpinner"

const LoadingContainer = () => {
  return (
    <div className={styles.spinnerContainer}>
        <LoadingSpinner />
        <p className={styles.title}>Ładowanie...</p>
    </div>
  );
};

export default LoadingContainer;
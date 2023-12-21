// FloatingButton.tsx

import React, { useState } from 'react';
import styles from './FloatingButton.module.css';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false); // New state to track form interaction

  const text = "NEWSLETTER";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted"); // Replace with actual form submission logic
    setFormInteracted(false); // Reset the form interaction state after submission
  };

  const handleFormInteraction = () => {
    setFormInteracted(true); // Set form interaction state to true when the form is interacted with
  };

  return (
    <button 
      className={styles.floatingButton} 
      onClick={onClick} 
      onMouseEnter={() => setShowPopup(true)} 
      onMouseLeave={() => !formInteracted && setShowPopup(false)} // Only hide popup if form has not been interacted with
    >
      <div className={styles.label}>
        <div className={styles.topDiv}></div>
        <div className={styles.middleDiv}>
          {text.split('').map((letter, index) => (
            <div key={index} className={styles.letter}>{letter}</div>
          ))}
        </div>
        <div className={styles.bottomDiv}></div>
      </div>
      <div className={styles.engage}>
        {(showPopup || formInteracted) && ( // Show form if either showPopup is true or form has been interacted with
          <form className={styles.form} onSubmit={handleSubmit} onClick={handleFormInteraction}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </button>
  );
};

export default FloatingButton;


// FloatingButton.tsx

import React from 'react';
import styles from './FloatingButton.module.css'; // Correct import for CSS module

interface FloatingButtonProps {
  onClick: () => void; // Function to call when the button is clicked
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  console.log("Rendering Floating Button");
  return (
    <button className={styles.floatingButton} onClick={onClick}>
      Open Form
    </button>
  );
};


export default FloatingButton;

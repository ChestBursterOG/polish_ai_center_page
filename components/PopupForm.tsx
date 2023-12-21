// PopupForm.tsx

import React from 'react';
import styles from './PopupForm.module.css';

interface PopupFormProps {
  visible: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ visible, onClose }) => {
  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
      <div className={styles.formContent}>
        {/* Your form elements go here */}
      </div>
    </div>
  );
};

export default PopupForm;

// components/CustomSelect.js

import { useState, useEffect } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({ options, onChange, id, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setSelectedValue(defaultValue || '');
  }, [defaultValue]);

  return (
    <div className={styles.customSelect}>
      <div
        className={isOpen ? `${styles.select} ${styles.open}` : styles.select}
        onClick={toggleList}
      >
        <div className={styles.selectContain}>
          {selectedValue || defaultValue}
        </div>
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={(e) => {
                e.preventDefault();
                setSelectedValue(option.value);
                onChange(id, option.value);
                toggleList();
              }}
              className={styles.option}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

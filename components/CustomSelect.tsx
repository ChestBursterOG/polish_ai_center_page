import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomSelect.module.css';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (id: number, value: string) => void;
  id: number;
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, id, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedValue(defaultValue || '');
  }, [defaultValue]);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node) && isOpen) {
        closeDropdown();
      }
    };

    window.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ''}`}
        onClick={toggleList}
      >
        <div className={styles.selectContain}>
          {selectedValue}
        </div>
      </div>
      {isOpen && (
        <ul className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
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

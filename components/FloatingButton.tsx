// FloatingButton.tsx

import React, { useState } from 'react';
import styles from './FloatingButton.module.css';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    organization: '',
    phone: '',
    source: ''
  });
  const text = "NEWSLETTER";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted"); // Replace with actual form submission logic
    setFormInteracted(false);

    const dataToSend = {
      fields: {
        Name: formData.name,
        Email: formData.email,
        About: formData.about,
        Organization: formData.organization,
        Phone: formData.phone, // Fixed duplicated 'About' key
        Source: formData.source // Fixed duplicated 'About' key
      }
    };

    try {
      // Make a POST request to Airtable
      const response = await fetch('/api/sendDataToAirTableNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Clear the form
      setFormData({
        name: '',
        email: '',
        about: '',
        organization: '',
        phone: '',
        source: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      // Reset the form interaction state after submission
      setFormInteracted(false);
    }
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Imię*" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required />
            <textarea name="about" placeholder="Opowiedź nam o sobie, czego szukasz? czym się zajmujesz? czym się interesujesz? co teraz robisz?" value={formData.about} onChange={handleInputChange} />
            <input type="text" name="organization" placeholder="Jaką organizację reprezentujesz?" value={formData.organization} onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleInputChange} />
            <input type="text" name="source" placeholder="Skąd usłyszałeś/usłyszałaś o PCSI?" value={formData.source} onChange={handleInputChange} />
            <button type="submit">Wyślij</button>
          </form>
        )}
      </div>
    </button>
  );
};

export default FloatingButton;

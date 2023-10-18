"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './VolunteerContainer.module.css';


const Footer = () => {

    const handleSelectChange = (selectedValue) => {
    console.log('Selected Value:', selectedValue);
    setFormData({
      ...formData,
      job: selectedValue,
    });
    // You can handle the selected value here
  };

const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to a server
    console.log(formData);

    const dataToSend = {
      fields: {
        Name: formData.firstName,
        Lastname: formData.lastName,
        Email: formData.email,
        Message: formData.message
      },
    };

    try {
      // Make a POST request to Airtable
      const response = await fetch('/api/sendDataToAirTable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleBox}>
                <p className={styles.title}>Chcesz być częścią rewolucji technologicznej? Dołącz do naszego zespołu wolontariuszy i razem przyczynijmy się do kształtowania przyszłości! Twoje zaangażowanie może sprawić, że technologia stanie się bardziej dostępna dla wszystkich, a nasze innowacje będą miały realny wpływ na społeczeństwo. </p>
            </div>
            <div className={styles.encourageBox}>
                <p className={styles.encourage}>Wypełnij formularz, a nasza fundacja niebawem się z Tobą skontaktuje</p>
            </div>
            <form className={styles.form2} onSubmit={handleSubmit}>
            <div className={styles.form}>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="firstName">Imię:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.textfield}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="lastName">Nazwisko:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.textfield}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.textfield}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="email">Wiadomość:</label>
                <textarea
                  type="text"
                  id="email"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <button className={styles.send} type="submit">Wyślij</button>
            </div>
            </form>            
            
        </div>
    );
}

export default Footer;

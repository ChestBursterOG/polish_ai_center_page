"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './CVContainer.module.css';
import CustomSelect from './CustomSelect';
import CustomSelect2 from './CustomSelect';


const Footer = () => {

  const regions = [
    { label: 'Wrocław', value: 'Wrocław' },
    { label: 'Bydgoszcz', value: 'Bydgoszcz' },
    { label: 'Toruń', value: 'Toruń' },
    { label: 'Lublin', value: 'Lublin' },
    { label: 'Gorzów Wielkopolski', value: 'Gorzów Wielkopolski' },
    { label: 'Zielona Góra', value: 'Zielona Góra' },
    { label: 'Łódź', value: 'Łódź' },
    { label: 'Kraków', value: 'Kraków' },
    { label: 'Warszawa', value: 'Warszawa' },
    { label: 'Rzeszów', value: 'Rzeszów' },
    { label: 'Białystok', value: 'Białystok' },
    { label: 'Gdańsk', value: 'Gdańsk' },
    { label: 'Katowice', value: 'Katowice' },
    { label: 'Kielce', value: 'Kielce' },
    { label: 'Olsztyn', value: 'Olsztyn' },
    { label: 'Poznań', value: 'Poznań' },
    { label: 'Szczecin', value: 'Szczecin' },
    { label: 'Opole', value: 'Opole' },
    
  ];

  const industries = [
    { label: 'Nowoczesne rolnictwo', value: 'Nowoczesne rolnictwo' },
    { label: 'IT/AI', value: 'IT/AI' },
    { label: 'Medycyna długowieczności', value: 'Medycyna długowieczności' },
    { label: 'Badania laboratoryjne', value: 'Badania laboratoryjne' },
    { label: 'Branża spożywcza', value: 'Branża spożywcza' },
  ];

  

  
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    region: 'Lublin',
    industry: 'IT/AI',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSelectChange = (id: number, value: string) => {
  setFormData((prevFormData) => {
    if (id === 0) {
      return {
        ...prevFormData,
        region: value,
      };
    } else if (id === 1) {
      return {
        ...prevFormData,
        industry: value,
      };
    }
    return prevFormData;
  });
};



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to a server
    console.log(formData);

    const dataToSend = {
      fields: {
        Name: formData.firstName,
        Email: formData.email,
        Region: formData.region,
        Industry: formData.industry,
        Message: formData.message,
        

      },
    };

    try {
      // Make a POST request to Airtable
      const response = await fetch('/api/sendDataToAirTableCVForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Clear the form
      setFormData({
        firstName: '',
        email: '',
        message: '',
        
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


    return (
        <div className={styles.mainContainer}>
            <div className={styles.encourageBox}>
                <p className={styles.encourage}>Wypełnij formularz, a nasza fundacja niebawem się z Tobą skontaktuje</p>
            </div>
            <form className={styles.form2} onSubmit={handleSubmit}>
            <div className={styles.form}>
            <div className={styles.nameContainer}>
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
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="region">Region:</label>
                <CustomSelect options={regions} onChange={handleSelectChange} id={0} defaultValue={formData.region}/>
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="industry">Branża:</label>
                <CustomSelect2 options={industries} onChange={handleSelectChange} id={1} defaultValue={formData.industry}/>
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="message">Opisz nam krótko w czym się czujesz dobrze oraz co chciałbyś/chciałabyś robić:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleTextareaChange}
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

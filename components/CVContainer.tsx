"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './CVContainer.module.css';


const Footer = () => {

  
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to a server
    console.log(formData);

    const dataToSend = {
      fields: {
        Name: formData.firstName,
        Surname: formData.lastName,
        Email: formData.email,
        Message: formData.message,
        Opis: formData.field1,
        Preferencje: formData.field2,
        Skills: formData.field3,
        Why: formData.field4,
        Values: formData.field5,
        TeamWork: formData.field6,
        Interests: formData.field7,
        Future: formData.field8,
        Society: formData.field9

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
        lastName: '',
        email: '',
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: ''
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
                <label className={styles.formLabel} htmlFor="field1">Napisz krótki tekst analizujący zagadnienie, trend, który Cię interesuje w perspektywie lokalnej lub globalnej:</label>
                <textarea
                  id="field1"
                  name="field1"
                  required
                  value={formData.field1}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field2">Napisz nam w czym się czujesz dobrze oraz co chciałbyś/chciałabyś robić:</label>
                <textarea
                  id="field2"
                  name="field2"
                  required
                  value={formData.field2}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field3">Czy posiadasz jakieś specjalne umiejętności lub doświadczenie, które mogą być przydatne w pracy wolonariusza?</label>
                <textarea
                  id="field3"
                  name="field3"
                  required
                  value={formData.field3}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field4">Dlaczego zdecydowałeś/aś się zostać wolonariuszem w naszej fundacji?</label>
                <textarea
                  id="field4"
                  name="field4"
                  required
                  value={formData.field4}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field5">Jakie wartości są dla Ciebie najważniejsze i jak wpłynęły na decyzję o zostaniu wolonariuszem?</label>
                <textarea
                  id="field5"
                  name="field5"
                  required
                  value={formData.field5}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field6">Czy preferujesz pracę indywidualną czy zespołową? Dlaczego?</label>
                <textarea
                  id="field6"
                  name="field6"
                  required
                  value={formData.field6}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field7">Jakie są Twoje pasje i zainteresowania?</label>
                <textarea
                  id="field7"
                  name="field7"
                  required
                  value={formData.field7}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field8">Jakie są Twoje przemyślenia na temat przyszłości naszej fundacji? Jak widzisz naszą organizację za 5 lat?</label>
                <textarea
                  id="field8"
                  name="field8"
                  required
                  value={formData.field8}
                  onChange={handleTextareaChange}
                  className={`${styles.textfield} ${styles.textfield2}`}
                />
            </div>
            <div className={styles.formContainer}>
                <label className={styles.formLabel} htmlFor="field9">Czego według Ciebie potrzebuje nasze społeczństwo, aby stać się lepszym miejscem dla wszystkich?</label>
                <textarea
                  id="field9"
                  name="field9"
                  required
                  value={formData.field9}
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

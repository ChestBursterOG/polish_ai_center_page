"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './EducationContainer.module.css';
import LoadingContainer from "@/components/LoadingContainer"
import EducationSubContainer from "@/components/EducationSubContainer"
import axios from 'axios'


interface AirtableRecord {
  id: string;
  fields: {
    Name: string;
    Date: string;
    Place: string;
    Mode: string;
    Description: string;
    GraphicLink: string;
    // Add other fields as needed
  };
  createdTime: string;
}

const Footer = () => {

  

  const [records, setRecords] = useState<AirtableRecord[]>([]);
    const [loading, setLoading] = useState(true);

    const handleButtonClick = () => {
    // Redirect to a different subpage
    window.location.href = '/volunteer';
  };

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/getDataFromAirTableEducation');
      const fetchedRecords = response.data.records;

      // Check if fetchedRecords is an array before setting the state
      if (Array.isArray(fetchedRecords)) {
        setRecords(fetchedRecords);
        
      } else {
        console.error('API response is not an array:', fetchedRecords);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


    return (
        <div className={styles.mainContainer}>
        <p className={styles.title}>Witaj w sercu naszych wydarzeń! <br />Nasza fundacja to nie tylko technologia, to także spotkania, warsztaty i inspirujące prelekcje. Odkryj świat możliwości podczas naszych eventów, gdzie innowacyjne pomysły przenoszą się ze słów do czynów</p>
        {loading ? (
              <div className={styles.spinnerBackround} >
                <LoadingContainer />
              </div>
            ) : (
              <div>
                {records.map((record, index) => (
                  <EducationSubContainer key={index} title={record.fields.Name} date={record.fields.Date} place={record.fields.Place} mode={record.fields.Mode} description={record.fields.Description} link={record.fields.GraphicLink} />
                ))}
                <div className={styles.question}>
                    <p>Odkryj świat wiedzy na własnych warunkach! <br />Zainicjuj swoją ścieżkę nauki z naszymi indywidualnymi szkoleniami. Zapytaj o dostosowane do Twoich potrzeb eventy edukacyjne już teraz!</p>
                    <button onClick={handleButtonClick} className={styles.ask} type="submit">Zapytaj o szkolenie</button>
                </div>
              </div>

            )}

            
            
        </div>
    );
}

export default Footer;

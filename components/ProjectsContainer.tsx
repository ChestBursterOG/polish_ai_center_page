"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './ProjectsContainer.module.css';
import ProjectsSubContainer from "@/components/ProjectsSubContainer"
import axios from 'axios'
import LoadingSpinner from "@/components/LoadingSpinner"
import LoadingContainer from "@/components/LoadingContainer"

interface Record {
  id: string;
  fields: {
    Title: string;
    Description: string;
    GraphicLink: string;
    // Add other fields as needed
  };
}


const Footer = () => {

    const [records, setRecords] = useState<Record[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/getDataFromAirTable');
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
            <p className={styles.title}>Odkryj fascynujący świat naszych projektów, gdzie technologia spotyka się z innowacją, a pomysły przekształcają się w rzeczywistość. Każdy projekt naszej fundacji to historia pasji, kreatywności i zaangażowania, która inspiruje i zmienia świat.</p>
            {loading ? (
              <div className={styles.spinnerBackround} >
                <LoadingContainer />
              </div>
            ) : (
              <div>
                {records.map((record, index) => (
                  <ProjectsSubContainer key={index} title={record.fields.Title} description={record.fields.Description} link={record.fields.GraphicLink} />
                ))}
              </div>
            )}

            
        </div>
    );
}

export default Footer;

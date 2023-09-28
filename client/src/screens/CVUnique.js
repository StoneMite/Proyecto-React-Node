import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from './CVUnique.module.css'; // Importa el módulo CSS

const CVUnique = () => {
  const { id } = useParams();
  const [uniqueCV, setUniqueCV] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/applicant/byID/${id}`)
      .then((response) => {
        setUniqueCV(response.data);
      })
      .catch((error) => {
        console.error('Error al mostrar los solicitantes:', error);
      });
  }, [id]);

  return (
    <div className={styles.CVUniqueContainer}>
      <div className={styles.CVField}>
        <label>Job Title:</label>
        <div>{uniqueCV.jobTitle}</div>
      </div>
      <div className={styles.CVField}>
        <label>Company:</label>
        <div>{uniqueCV.company}</div>
      </div>
      <div className={styles.CVField}>
        <label>Start Date:</label>
        <div>{uniqueCV.startDate}</div>
      </div>
      <div className={styles.CVField}>
        <label>End Date:</label>
        <div>{uniqueCV.endDate}</div>
      </div>
      <div className={styles.CVField}>
        <label>Description:</label>
        <div className={styles.CVDescription}>{uniqueCV.description}</div>
      </div>
      <div className={styles.CVField}>
        <label>Skills:</label>
        <div className={styles.CVLargeText}>{uniqueCV.skills}</div>
      </div>
      <div className={styles.CVField}>
        <label>Education:</label>
        <div className={styles.CVLargeText}>{uniqueCV.education}</div>
      </div>
    </div>
  );
}

export default CVUnique;


// CVList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CVList = () => {
  const [curriculumList, setCurriculumList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/calculate-scores/")
      .then((response) => {
        setCurriculumList(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los currículums con puntuaciones:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Currículums con Puntuación </h2>
      <ul>
        {curriculumList.map((item) => (
          <li key={item.applicant.id}>
            <h3>{item.applicant.jobTitle}</h3>
            <p>Postulante: {item.applicant.id} | Puntuación Total: {item.totalScore}</p>
            {/* Muestra otros detalles del currículum según tus necesidades */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CVList;

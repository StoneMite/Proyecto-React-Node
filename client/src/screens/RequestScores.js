// PunctuationCalculator.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestScores = () => {
  const [puntuaciones, setPuntuaciones] = useState([]);

  const calculateScores = async () => {
    try {
      const response = await axios.get('http://localhost:3000/calculate-scores/'); // Ruta para calcular todas las puntuaciones
      setPuntuaciones(response.data);
    } catch (error) {
      console.error('Error al calcular las puntuaciones:', error);
    }
  };

  useEffect(() => {
    calculateScores();
  }, []);

  return (
    <div>
      <h2>Calcular Puntuaciones</h2>
      <button onClick={calculateScores}>Calcular Todas las Puntuaciones</button>
      <ul>
        {puntuaciones.map((puntuacion) => (
          <li key={puntuacion.applicantId}>Solicitante {puntuacion.applicantId}: {puntuacion.totalScore}</li>
        ))}
      </ul>
    </div>
  );
};

export default RequestScores;

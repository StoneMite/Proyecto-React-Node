import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RequestScores = () => {
  const [puntuaciones, setPuntuaciones] = useState([]);
  const { applicantId } = useParams(); // Utiliza 'useParams' para obtener el ID del solicitante desde la URL

  const calculateScores = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/calculate-scores/${applicantId}`);
      setPuntuaciones(response.data);
    } catch (error) {
      console.error('Error al calcular las puntuaciones:', error);
    }
  }, [applicantId]);

  useEffect(() => {
    calculateScores();
  }, [calculateScores, applicantId]);

  return (
    <div>
      <h2>Calcular Puntuaciones para Solicitante {applicantId}</h2>
      <button onClick={calculateScores}>Calcular Puntuaciones</button>
      <ul>
        {puntuaciones.map((puntuacion) => (
          <li key={puntuacion.applicantId}>Solicitante {puntuacion.applicantId}: Puntuación: {puntuacion.totalScore}</li>
        ))}
      </ul>
    </div>
  );
};

export default RequestScores;

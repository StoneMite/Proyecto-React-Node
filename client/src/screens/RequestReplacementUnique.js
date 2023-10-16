import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from './CVUnique.module.css'; // Importa el módulo CSS
import {Link } from 'react-router-dom';

const RequestReplacementUnique = () => {
  const { id } = useParams();
  const [uniqueRequest, setUniqueRequest] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/requestReplacement/byID/${id}`)
      .then((response) => {
        setUniqueRequest(response.data);
      })
      .catch((error) => {
        console.error('Error al mostrar las solicitudes de reemplazo:', error);
      });
  }, [id]);

  return (
    <div className={styles.CVUniqueContainer}>
    <div className={styles.CVField}>
        <label>Título:</label>
        <div>{uniqueRequest.titulo}</div>
    </div>
    <div className={styles.CVField}>
        <label>Descripción:</label>
        <div className={styles.CVDescription}>{uniqueRequest.descripcion}</div>
    </div>
    <div className={styles.CVField}>
        <label>Funciones del Cargo:</label>
        <div>{uniqueRequest.funcionesCargo}</div>
    </div>
    <div className={styles.CVField}>
        <label>Requerimientos del Cargo:</label>
        <div>{uniqueRequest.requerimientosCargo}</div>
    </div>
    <div className={styles.CVField}>
        <label>Sueldo:</label>
        <div>{uniqueRequest.sueldo}</div>
    </div>
    <div className={styles.CVField}>
        <label>Ubicación:</label>
        <div>{uniqueRequest.ubicacion}</div>
    </div>
    <div className={styles.CVField}>
        <label>Seniority:</label>
        <div>{uniqueRequest.seniority}</div>
    </div>
    <div className={styles.CVField}>
        <label>Duración del Trabajo:</label>
        <div>{uniqueRequest.duracionTrabajo}</div>
    </div>
    <div className={styles.CVField}>
        <label>Sección:</label>
        <div>{uniqueRequest.seccion}</div>
    </div>
    {/* Botón para ir al registro de currículum */}
    <div className={styles.CVButton}>
        <Link to="/CVRegister" className={styles.CVButtonLink}>
          Postular
        </Link>
      </div>
    </div>

  );
  
}

export default RequestReplacementUnique;


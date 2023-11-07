import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './CVUnique.module.css';

const RequestReplacementUnique = () => {
  const { id } = useParams();
  const [uniqueRequest, setUniqueRequest] = useState({});
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const [applicantAssociated, setApplicantAssociated] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/requestReplacement/byID/${id}`)
      .then((response) => {
        setUniqueRequest(response.data);
        // Verificar si el currículum ya está asociado a esta solicitud de reemplazo
        // Puedes hacer una solicitud al servidor para verificar esta asociación aquí
        // Si el currículum está asociado, actualiza el estado 'applicantAssociated' a true
      })
      .catch((error) => {
        console.error('Error al mostrar las solicitudes de reemplazo:', error);
      });
  }, [id]);

  const handlePostularClick = () => {
    if (!solicitudEnviada) {
      // Envía la solicitud al servidor para asociar el currículum a la solicitud de reemplazo
      console.log("Botón de Postular clicado");
      axios.post(`http://localhost:3000/postulate/${id}/apply`)
        .then((response) => {
          // Cambia el estado para mostrar "Solicitud Enviada" y habilitar la indicación de asociación
          console.log("Respuesta exitosa al postularse:", response.data);
          setSolicitudEnviada(true);
          setApplicantAssociated(true);
        })
        .catch((error) => {
          console.error('Error al postularse:', error);
        });
    }
  };

  return (
    <div className={styles.CVUniqueContainer}>
      <div className={styles.CVField}>
        <label>Título:</label>
        <div>{uniqueRequest.titulo}</div>
      </div>
      <div className={styles.CVField}>
        <label>Descripción:</label>
        <div>{uniqueRequest.descripcion}</div>
      </div>
      <div className={styles.CVField}>
        <label>Funciones del cargo:</label>
        <div>{uniqueRequest.funcionesCargo}</div>
      </div>
      <div className={styles.CVField}>
        <label>Requerimientos del cargo:</label>
        <div>{uniqueRequest.requerimientosCargo}</div>
      </div>
      <div className={styles.CVField}>
        <label>Sueldo:</label>
        <div>{uniqueRequest.Sueldo}</div>
      </div>
      <div className={styles.CVField}>
        <label>Ubicacion:</label>
        <div>{uniqueRequest.ubicacion}</div>
      </div>
      <div className={styles.CVField}>
        <label>Seniority:</label>
        <div>{uniqueRequest.seniority}</div>
      </div>
      <div className={styles.CVField}>
        <label>Duracion de Trabajo:</label>
        <div>{uniqueRequest.duracionTrabajo}</div>
      </div>
      <div className={styles.CVField}>
        <label>Seccion:</label>
        <div>{uniqueRequest.seccion}</div>
      </div>
      <div className={styles.CVField}>
        <label>Años de experiencia:</label>
        <div>{uniqueRequest.yearsExperience}</div>
      </div>
      {/* Agregar más campos según tus necesidades */}
      
      <div className={styles.CVButton}>
        {solicitudEnviada ? (
          applicantAssociated ? (
            <div className={styles.SolicitudAsociada}>Solicitud Enviada</div>
          ) : (
            <div className={styles.SolicitudEnviada}>Solicitud Enviada</div>
          )
        ) : (
          <button onClick={handlePostularClick}>Postular</button>
        )}
      </div>
    </div>
  );
  
}

export default RequestReplacementUnique;

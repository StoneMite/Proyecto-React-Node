import React, { useContext, useState } from 'react';
import styles from './CVUnique.module.css';
import axios from 'axios';
import { AuthContext } from '../helpers/newAuthContext';

const Postulation = ({ requestId }) => {
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);
  const { authState } = useContext(AuthContext);

  const handlePostularClick = () => {
    if (authState.status && !solicitudEnviada) {
      axios.post(`http://localhost:3000/postulate/${requestId}/apply`)
        .then((response) => {
          setSolicitudEnviada(true);
        })
        .catch((error) => {
          console.error('Error al postularse:', error);
        });
    }
  };

  return solicitudEnviada ? (
    <div className={styles.SolicitudEnviada}>Solicitud Enviada</div>
  ) : (
    <button onClick={handlePostularClick}>Postular</button>
  );
}

export default Postulation;

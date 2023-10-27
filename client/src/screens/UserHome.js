import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../helpers/newAuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './UserHome.module.css';

const UserDashboard = () => {
  const [requests, setRequests] = useState([]);
  const { authState, setAuthState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/requestReplacement')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las solicitudes de reemplazo en el frontend:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/auth', {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    })
      .then((response) => {
        console.log("Respuesta del servidor en userhome:", response.data);
        if (!response.data.error) {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
            role: response.data.role,
          });
        }
        setIsLoading(false);
      });
  }, [setAuthState]);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  if (authState.role === 'user') {
    return (
      <div className={styles.Requests}>
        <h2>Solicitudes de Reemplazo</h2>
        {requests.map((value, key) => (
          <div className={styles.Request} onClick={() => { navigate(`/requestReplacement/${value.id}`); }} key={key}>
            <div className={styles.Field}>
              <div className={styles.Label}>Título:</div>
              <div className={styles.Value}>{value.titulo}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Descripción:</div>
              <div className={styles.Value}>{value.descripcion}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Funciones del Cargo:</div>
              <div className={styles.Value}>{value.funcionesCargo}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Requerimientos del Cargo:</div>
              <div className={styles.Value}>{value.requerimientosCargo}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Sueldo:</div>
              <div className={styles.Value}>{value.sueldo}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Ubicacion:</div>
              <div className={styles.Value}>{value.ubicacion}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>seniority:</div>
              <div className={styles.Value}>{value.seniority}</div>
            </div>
            <div className={styles.Field}>
              <div className={styles.Label}>Seccion:</div>
              <div className={styles.Value}>{value.seccion}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center">Access Denied</h1>
      </div>
    );
  }
};

export default UserDashboard;

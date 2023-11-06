// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import styles from './CVUnique.module.css'; // Importa el módulo CSS
// import {Link } from 'react-router-dom';

// const RequestReplacementUnique = () => {
//   const { id } = useParams();
//   const [uniqueRequest, setUniqueRequest] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:3000/requestReplacement/byID/${id}`)
//       .then((response) => {
//         setUniqueRequest(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al mostrar las solicitudes de reemplazo:', error);
//       });
//   }, [id]);

//   return (
//     <div className={styles.CVUniqueContainer}>
//     <div className={styles.CVField}>
//         <label>Título:</label>
//         <div>{uniqueRequest.titulo}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Descripción:</label>
//         <div className={styles.CVDescription}>{uniqueRequest.descripcion}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Funciones del Cargo:</label>
//         <div>{uniqueRequest.funcionesCargo}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Requerimientos del Cargo:</label>
//         <div>{uniqueRequest.requerimientosCargo}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Sueldo:</label>
//         <div>{uniqueRequest.sueldo}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Ubicación:</label>
//         <div>{uniqueRequest.ubicacion}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Seniority:</label>
//         <div>{uniqueRequest.seniority}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Duración del Trabajo:</label>
//         <div>{uniqueRequest.duracionTrabajo}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Sección:</label>
//         <div>{uniqueRequest.seccion}</div>
//     </div>
//     <div className={styles.CVField}>
//         <label>Años de experiencia:</label>
//         <div>{uniqueRequest.yearsExperience}</div>
//     </div>
//     {/* Botón para ir al registro de currículum */}
//     <div className={styles.CVButton}>
//         <Link to="/CVRegister" className={styles.CVButtonLink}>
//           Postular
//         </Link>
//       </div>
//     </div>

//   );
  
// }

// export default RequestReplacementUnique;




import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from './CVUnique.module.css';
import { AuthContext } from '../helpers/newAuthContext'; // Importa el contexto de autenticación

const RequestReplacementUnique = () => {
  const { id } = useParams();
  const [uniqueRequest, setUniqueRequest] = useState({});
  const [isPostulated, setIsPostulated] = useState(false);
  const [applicantId, setApplicantId] = useState(null);

  const { currentUser } = useContext(AuthContext); // Obtiene el usuario actual del contexto

  useEffect(() => {
    axios.get(`http://localhost:3000/requestReplacement/byID/${id}`)
      .then((response) => {
        setUniqueRequest(response.data);
      })
      .catch((error) => {
        console.error('Error al mostrar las solicitudes de reemplazo:', error);
      });

    // Obtiene el ID del currículum (Applicant) asociado al usuario actual.
    const applicantId = currentUser?.Applicant?.id;
    setApplicantId(applicantId);
  }, [id, currentUser]); // Asegúrate de incluir currentUser en las dependencias del efecto

  const handlePostulation = () => {
    if (applicantId) {
      axios.post(`http://localhost:3000/postulate`, {
        applicantId: applicantId,
        requestId: uniqueRequest.id,
      })
        .then((response) => {
          setIsPostulated(true);
        })
        .catch((error) => {
          console.error('Error al postular:', error);
        });
    }
  };

  return (
    <div className={styles.CVUniqueContainer}>
      {/* ... Otros campos y detalles de la solicitud ... */}
      {/* Botón para postular */}
      {!isPostulated ? (
        <div className={styles.CVButton}>
          <button onClick={handlePostulation} className={styles.CVButtonLink}>
            Postular
          </button>
        </div>
      ) : (
        <div className={styles.CVButton}>
          <p>¡Postulación realizada con éxito!</p>
        </div>
      )}
    </div>
  );
}

export default RequestReplacementUnique;

import React, { useState } from 'react';
import axios from 'axios';

const Postulation = ({ applicantId, requestId, onPostulationSuccess }) => {
  const [isPostulated, setIsPostulated] = useState(false);

  const handlePostulation = () => {
    axios.post(`http://localhost:3000/apply-for-request`, {
      applicantId: applicantId,
      requestId: requestId,
    })
      .then((response) => {
        setIsPostulated(true);
        onPostulationSuccess(); // Llama a la función de éxito pasada como prop
      })
      .catch((error) => {
        console.error('Error al postular:', error);
      });
  };

  return (
    <div>
      {!isPostulated ? (
        <div>
          <button onClick={handlePostulation}>Postular</button>
        </div>
      ) : (
        <div>
          <p>¡Postulación realizada con éxito!</p>
        </div>
      )}
    </div>
  );
}

export default Postulation;

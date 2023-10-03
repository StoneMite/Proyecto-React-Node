import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../helpers/newAuthContext';
import axios from 'axios'; // Importa Axios

const AdminDashboard = () => {
  const { authState, setAuthState } = useContext(AuthContext); // Importa setAuthState del contexto
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Realiza la carga de datos del usuario de forma síncrona
    axios
      .get('http://localhost:3000/auth/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if (!response.data.error) {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
            role: response.data.role,
          });
        }
        setIsLoading(false); // Marca la carga como completa
      });
  }, [setAuthState]); // Agrega setAuthState al arreglo de dependencias
  

  // Muestra un indicador de carga mientras se obtienen los datos del usuario
  if (isLoading) {
    return (
      <div>
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  // Verifica si el usuario tiene permisos de administrador antes de renderizar el contenido
  if (authState.role !== 'admin') {
    return (
      <div>
        <h1 className="text-center">Access Denied</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center">access to Admin Dashboard</h1><br/>
      {/* Agrega aquí el contenido del dashboard */}
    </div>
  );
}

export default AdminDashboard;
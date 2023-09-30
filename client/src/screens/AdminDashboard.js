import React, { useContext } from 'react';
import { AuthContext } from '../helpers/newAuthContext';

const AdminDashboard = () => {
  const { authState } = useContext(AuthContext);

  // Verifica si el usuario tiene permisos de administrador antes de renderizar el contenido
  if (authState.role !== 'admin') {
    return (
      <div>
        <h1 className="text-center">Access Denied</h1>
      </div>
    );
  }

  else {return (
    <div>
      <h1 className="text-center">Admin Dashboard</h1><br/>
      {/* Agrega aquí el contenido del dashboard */}
    </div>
  );
}}

export default AdminDashboard;

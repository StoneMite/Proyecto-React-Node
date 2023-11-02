import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//ESTE COMPONENTE ES UN HOME GENERAL

const Home = () => {
  // Comentarios modificados:
  const [users, setusers] = useState([]);
  const [applicants, setApplicants] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    // Realizar una solicitud GET para obtener usuarios (usuarios)
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setusers(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error);
      });
  
    // Realizar una solicitud GET para obtener solicitantes (applicants)
    axios.get('http://localhost:3000/applicant')
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener solicitantes:', error);
      });
  }, []);

  return (
    <div className="app">
      {/* Comentarios modificados: */}
      <div>
        <h2>Usuarios</h2>
        {users.map((value, key) => (
          <div className="users" key={key}>
            <div className="username"> {value.username} </div>
            <div className="email">{value.email}</div>
            <div className="password">{value.password}</div>
          </div>
        ))}
      </div>

      <div>
        <h2>Solicitantes</h2>
        {applicants.map((value, key) => (
          <div className="formApplicant" onClick={() => { navigate(`/applicant/${value.id}`); }} key={key}>
            <div className="applicants">
              <div className="jobTitle">{value.jobTitle}</div>
              <div className="company">{value.company}</div>
              <div className="description">{value.description}</div>
              <div className="education">{value.education}</div>
              <div className="yearsExperience">{value.yearsExperience}</div>
              <div className="certifications">{value.certifications}</div>
              <div className="technicalSkills">{value.technicalSkills}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './screens/Home';
import CVRegistration from './screens/CVRegistration';
import CVUnique from './screens/CVUnique';
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from './components/Login';
import Registration from './components/Registration';
// import NavbarComponent from './components/Navbar';


function App() {

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };



  return (
    <div className='App'>
      
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        {/* <NavbarComponent /> */}
        <div className="navbar"> 
          <Link to="/">Homem page</Link>
          <Link to="/createCV">CV Registration</Link>
          {!authState.status && (
                <>
                  <Link to="/login" className={`nav-link ${authState.status ? '' : 'hidden'}`}> Login</Link>
                  <Link to="/registration" className={`nav-link ${authState.status ? '' : 'hidden'}`}> Registration</Link>
                </>
              )}

        </div>
        <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
        </div>
        <div>
          <Routes> {/* Cambio por "Switch" */}
                <Route path="/" element={<Home />} /> {/* Usa "element" */}
                <Route path="/home" element={<Home />} /> {/* Usa "element" */}
                <Route path="/createCV" element={<CVRegistration />} /> {/* Usa "element" */}
                <Route path="/applicant/:id" element={<CVUnique/>} />
                <Route path="/login" element={<Login/>} /> Usa "element"
                <Route path="/registration" element={<Registration />} /> Usa "element"
                {/* <Route path="/registro-profesional" element={<RegistroProfesional />} /> Usa "element" */}
          </Routes>
        </div>
    </Router>
    </AuthContext.Provider>
  </div>
  );
}

export default App;


// import React, { useContext, useEffect, useState } from 'react';
// import styles from './CVRegistration.module.css';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../helpers/newAuthContext';

// const initialValues = {
//   jobTitle: "",
//   company: "",
//   startDate: "", // Puedes quitar esto si no lo necesitas
//   endDate: "",   // Puedes quitar esto si no lo necesitas
//   description: "",
//   skills: "",
//   education: "",
//   yearsExperience: 0, // Agregamos un campo para años de experiencia
//   languageSkills: "", // Agregamos un campo para habilidades de idioma
//   certifications: "",
//   technicalSkills: "",
// };

// const validationSchema = Yup.object().shape({
//   jobTitle: Yup.string().required("Job title is required"),
//   company: Yup.string().required("Company is required"),
//   // Puedes agregar más validaciones según tus necesidades
// });

// const CvForm = () => {
//   const navigate = useNavigate();
//   const onSubmit = (values, { resetForm }) => {
//     axios.post("http://localhost:3000/applicant", values)
//       .then((response) => {
//         console.log("Solicitante creado:", response.data);
//         resetForm();
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Error al crear solicitante:", error);
//       });
//   };


//   const { authState, setAuthState } = useContext(AuthContext);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/auth/auth', {
//         headers: {
//           accessToken: localStorage.getItem('accessToken'),
//         },
//       })
//       .then((response) => {
//         console.log("Respuesta del servidor:", response.data);
//         if (!response.data.error) {
//           setAuthState({
//             username: response.data.username,
//             id: response.data.id,
//             status: true,
//             role: response.data.role,
//           });
//         }
//         setIsLoading(false);
//       });
//   }, [setAuthState]);

//   if (isLoading) {
//     return (
//       <div>
//         <h1 className="text-center">Loading...</h1>
//       </div>
//     );
//   }

//   if (authState.role === 'user') {
//     return (
//       <div className={styles.createApplicantPage}>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//           validationSchema={validationSchema}
//         >
//           <Form className={styles.formContainer}>
//             <div className={styles.formRow}>
//               <label>Job Title:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="jobTitle"
//                 placeholder="(Ex. Job Title...)"
//               />
//               <ErrorMessage name="jobTitle" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Company:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="company"
//                 placeholder="(Ex. Company...)"
//               />
//               <ErrorMessage name="company" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Description:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="description"
//                 placeholder="(Ex. Description...)"
//               />
//               <ErrorMessage name="description" component="span" className={styles.error} />
//             </div>
            
//             <div className={styles.formRow}>
//               <label>Education:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="education"
//                 placeholder="(Ex. Education...)"
//               />
//               <ErrorMessage name="education" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Years of Experience:</label>
//               <Field
//                 autoComplete="off"
//                 type="number"
//                 id="inputCreateApplicant"
//                 name="yearsExperience"
//               />
//               <ErrorMessage name="yearsExperience" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Language Skills:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="languageSkills"
//                 placeholder="(Ex. Language Skills...)"
//               />
//               <ErrorMessage name="languageSkills" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Certifications:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="certifications"
//                 placeholder="(Ex. Certifications...)"
//               />
//               <ErrorMessage name="certifications" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Technical Skills:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputCreateApplicant"
//                 name="technicalSkills"
//                 placeholder="(Ex. Technical Skills...)"
//               />
//               <ErrorMessage name="technicalSkills" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <button type="submit" className={styles.submitButton}> Subir Registro de CV</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1 className="text-center">Access Denied</h1>
//       </div>
//     );
//   }
// }

// export default CvForm;

//////////////////////////////////////////

import React, { useContext, useEffect, useState } from 'react';
import styles from './CVRegistration.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/newAuthContext';

const initialValues = {
  jobTitle: "",
  company: "",
  description: "",
  skills: "",
  education: "Media",
  yearsExperience: 0,
  languageSkills: "",
  certifications: "",
  technicalSkills: "",
};

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title is required"),
  company: Yup.string().required("Company is required"),
  // Puedes agregar más validaciones según tus necesidades
});

const CvForm = () => {
  const navigate = useNavigate();
  const onSubmit = (values, { resetForm }) => {
    const accessToken = localStorage.getItem("accessToken"); // Obtén el token de acceso del almacenamiento local
    const headers = {
      headers: {
        accessToken, // Agrega el token de acceso al encabezado
      },
    };
  
    axios.post("http://localhost:3000/applicant", values, headers)
      .then((response) => {
        console.log("Solicitante creado:", response.data);
        resetForm();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al crear solicitante:", error);
      });
  };
  

  const { authState, setAuthState } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3000/auth/auth', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
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

  const educationOptions = [
    "Media",
    "Universitario",
    "Posgrado",
    "Otro",
  ];
  

  if (isLoading) {
    return (
      <div>
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  if (authState.role === 'user') {
    return (
      <div className={styles.createApplicantPage}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className={styles.formContainer}>
            <div className={styles.formRow}>
              <label>Job Title:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="jobTitle"
                placeholder="(Ex. Job Title...)"
              />
              <ErrorMessage name="jobTitle" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <label>Company:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="company"
                placeholder="(Ex. Company...)"
              />
              <ErrorMessage name="company" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <label>Description:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="description"
                placeholder="(Ex. Description...)"
              />
              <ErrorMessage name="description" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
            <label>Education:</label>
            <Field as="select" id="inputCreateApplicant" name="education">
              {educationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Field>
            <ErrorMessage name="education" component="span" className={styles.error} />
            </div>

            <div className={styles.formRow}>
              <label>Years of Experience:</label>
              <Field
                autoComplete="off"
                type="number"
                id="inputCreateApplicant"
                name="yearsExperience"
              />
              <ErrorMessage name="yearsExperience" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <label>Language Skills:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="languageSkills"
                placeholder="(Ex. Language Skills...)"
              />
              <ErrorMessage name="languageSkills" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <label>Certifications:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="certifications"
                placeholder="(Ex. Certifications...)"
              />
              <ErrorMessage name="certifications" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <label>Technical Skills:</label>
              <Field
                autoComplete="off"
                id="inputCreateApplicant"
                name="technicalSkills"
                placeholder="(Ex. Technical Skills...)"
              />
              <ErrorMessage name="technicalSkills" component="span" className={styles.error} />
            </div>
            <div className={styles.formRow}>
              <button type="submit" className={styles.submitButton}> Subir Registro de CV</button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center">Access Denied</h1>
      </div>
    );
  }
}

export default CvForm;


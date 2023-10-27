// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styles from './CVRegistration.module.css'
// // esta pagina aun esta en desarrollo y lo que necesito es hacer la vista principal donde se
// //van a mostrar todos los curriculums y luego ahi me permita seleccionar opciones de eliminar o editar

// const CvEdit = () => {
//   const { id } = useParams();

//   const [editableCv, setEditableCv] = useState({
//     jobTitle: '',
//     company: '',
//     description: '',
//     // Agrega aquí el resto de los campos de tu currículum
//   });

//   useEffect(() => {
//     axios.get(`http://localhost:3000/applicant/byID/${id}`)
//       .then((response) => {
//         setEditableCv(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al cargar el currículum:', error);
//       });
//   }, [id]);

//   const validationSchema = Yup.object().shape({
//     jobTitle: Yup.string().required("Job title is required"),
//     company: Yup.string().required("Company is required"),
//     // Agrega validaciones para otros campos si es necesario
//   });

//   const handleEditCv = (values) => {
//     axios.put(`http://localhost:3000/applicant/byID/${id}`, values)
//       .then((response) => {
//         console.log('Currículum actualizado:', response.data);
//         // Redirige al usuario a la vista de lista de currículums u otra ubicación adecuada
//       })
//       .catch((error) => {
//         console.error('Error al actualizar el currículum:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Editar Curriculum</h2>
//       <Formik
//         initialValues={editableCv}
//         validationSchema={validationSchema}
//         onSubmit={handleEditCv}
//       >
//         <Form>
//           <div>
//             <label>Job Title:</label>
//             <Field type="text" name="jobTitle" />
//             <ErrorMessage name="jobTitle" component="div" />
//           </div>
//           <div>
//             <label>Company:</label>
//             <Field type="text" name="company" />
//             <ErrorMessage name="company" component="div" />
//           </div>
//           {/* Agrega aquí los campos restantes del currículum que quieras editar */}
//           <label>Description:</label>
//           <Field type="text" name="description"/>
//             <ErrorMessage name="description" component="span" className={styles.error} />
//           <div>
//           <div className={styles.formRow}>
//               <label>Education:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputEducation"
//                 name="education"
//                 placeholder="(Ex. Education...)"
//               />
//               <ErrorMessage name="education" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Years of Experience:</label>
//               <Field
//                 type="number"
//                 id="inputNumber"
//                 name="yearsExperience"
//               />
//               <ErrorMessage name="yearsExperience" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Language Skills:</label>
//               <Field
                
//                 id="inputLanguage"
//                 name="languageSkills"
//                 placeholder="(Ex. Language Skills...)"
//               />
//               <ErrorMessage name="languageSkills" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Certifications:</label>
//               <Field
                
//                 id="inputCertifications"
//                 name="certifications"
//                 placeholder="(Ex. Certifications...)"
//               />
//               <ErrorMessage name="certifications" component="span" className={styles.error} />
//             </div>
//             <div className={styles.formRow}>
//               <label>Technical Skills:</label>
//               <Field
//                 autoComplete="off"
//                 id="inputSkills"
//                 name="technicalSkills"
//                 placeholder="(Ex. Technical Skills...)"
//               />
//               <ErrorMessage name="technicalSkills" component="span" className={styles.error} />
//             </div>
//             <button type="submit">Guardar Cambios</button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default CvEdit;


import React from 'react';
import { Link } from 'react-router-dom';

const CvEdit = () => {
  return (
    <div className="createApplicantPage">
      <Link to="/cv-edit-form">
        <button className="createCvButton">Editar curriculum</button>
      </Link>
    </div>
  );
}

export default CvEdit;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from './CVRegistration.module.css';

const CvEditForm = () => {
  const { id } = useParams();

  const [editableCv, setEditableCv] = useState({
    jobTitle: '',
    company: '',
    description: '',
    education: '', // Agrega aquí el resto de los campos de tu currículum
    yearsExperience: 0,
    languageSkills: '',
    certifications: '',
    technicalSkills: '',
  });

  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Job title is required"),
    company: Yup.string().required("Company is required"),
    // Agrega validaciones para otros campos si es necesario
  });

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/applicant/byID/${id}`);
        const cvData = response.data;
        setEditableCv(cvData);
      } catch (error) {
        console.error('Error al cargar el currículum:', error);
      }
    };

    fetchCvData();
  }, [id]);

  const handleEditCv = (values) => {
    axios.put(`http://localhost:3000/applicant/byID/${id}`, values)
      .then((response) => {
        console.log('Currículum actualizado:', response.data);
        // Redirige al usuario a la vista de lista de currículums u otra ubicación adecuada
      })
      .catch((error) => {
        console.error('Error al actualizar el currículum:', error);
      });
  };

  return (
    <div>
      <h2>Editar Curriculum</h2>
      <Formik
        initialValues={editableCv}
        validationSchema={validationSchema}
        onSubmit={handleEditCv}
      >
        <Form>
          <div>
            <label>Job Title:</label>
            <Field type="text" name="jobTitle" />
            <ErrorMessage name="jobTitle" component="div" />
          </div>
          <div>
            <label>Company:</label>
            <Field type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </div>
          {/* Agrega aquí los campos restantes del currículum que quieras editar */}
          <div>
            <label>Description:</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" component="span" className={styles.error} />
          </div>
          <div>
            <label>Education:</label>
            <Field type="text" name="education" />
            <ErrorMessage name="education" component="div" />
          </div>
          <div>
            <label>Years of Experience:</label>
            <Field type="number" name="yearsExperience" />
            <ErrorMessage name="yearsExperience" component="div" />
          </div>
          <div>
            <label>Language Skills:</label>
            <Field type="text" name="languageSkills" />
            <ErrorMessage name="languageSkills" component="div" />
          </div>
          <div>
            <label>Certifications:</label>
            <Field type="text" name="certifications" />
            <ErrorMessage name="certifications" component="div" />
          </div>
          <div>
            <label>Technical Skills:</label>
            <Field type="text" name="technicalSkills" />
            <ErrorMessage name="technicalSkills" component="div" />
          </div>
          <button type="submit">Guardar Cambios</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CvEditForm;

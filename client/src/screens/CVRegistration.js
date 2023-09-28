import React from 'react';
import styles from './CVRegistration.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialValues = {
  jobTitle: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  skills: "",
  education: "",
};

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title is required"),
  company: Yup.string().required("Company is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().nullable(),
  description: Yup.string(),
  skills: Yup.string(),
  education: Yup.string(),
});

const CVRegistration = () => {
  const navigate = useNavigate();
  const onSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3000/applicant", values)
      .then((response) => {
        console.log("Solicitante creado:", response.data);
        resetForm();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al crear solicitante:", error);
      });
  };

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
            <label>Start Date:</label>
            <Field
              autoComplete="off"
              type="date"
              id="inputCreateApplicant"
              name="startDate"
            />
            <ErrorMessage name="startDate" component="span" className={styles.error} />
          </div>
          <div className={styles.formRow}>
            <label>End Date:</label>
            <Field
              autoComplete="off"
              type="date"
              id="inputCreateApplicant"
              name="endDate"
            />
            <ErrorMessage name="endDate" component="span" className={styles.error} />
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
            <label>Skills:</label>
            <Field
              autoComplete="off"
              id="inputCreateApplicant"
              name="skills"
              placeholder="(Ex. Skills...)"
            />
            <ErrorMessage name="skills" component="span" className={styles.error} />
          </div>
          <div className={styles.formRow}>
            <label>Education:</label>
            <Field
              autoComplete="off"
              id="inputCreateApplicant"
              name="education"
              placeholder="(Ex. Education...)"
            />
            <ErrorMessage name="education" component="span" className={styles.error} />
          </div>
          <div className={styles.formRow}>
            <button type="submit" className={styles.submitButton}> Subir Registro de CV</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CVRegistration;

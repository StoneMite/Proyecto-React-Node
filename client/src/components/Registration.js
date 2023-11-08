// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// function Registration() {
//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().min(3).max(15).required(),
//     password: Yup.string().min(4).max(20).required(),
//   });

//   const onSubmit = (data) => {
//     axios.post("http://localhost:3000/auth", data).then(() => {
//       console.log(data);
//     });
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         <Form className="formContainer">
//           <label>Username: </label>
//           <ErrorMessage name="username" component="span" />
//           <Field
//             autoComplete="off"
//             id="inputUsername"
//             name="username"
//             placeholder="(Ex. John123...)"
//           />

//           <label>Password: </label>
//           <ErrorMessage name="password" component="span" />
//           <Field
//             autoComplete="off"
//             type="password"
//             id="inputPassword"
//             name="password"
//             placeholder="Your Password..."
//           />

//           <button type="submit"> Register</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default Registration;



import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import styles from'./Registration.module.css';

function Registration() {
    const initialValues = {
      username: "",
      password: "",
      role: "",
    };
  
    const validationSchema = Yup.object().shape({
      username: Yup.string().min(3).max(15).required(),
      password: Yup.string().min(4).max(20).required(),
      role: Yup.string().required(),
    });
  
    const navigate = useNavigate(); // Obtén la función navigate
  
    const onSubmit = (data) => {
      axios.post("http://localhost:3000/auth/register", data).then(() => {
        // Registro exitoso, redirige al usuario
        console.log(data);
        navigate("/"); // Redirige al usuario a la página de inicio de sesión
      });
    };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.formContainer}>
          <label>Nombre de usuario: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            className={styles.Username}
            autoComplete="off"
            id="inputUsername"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <label>Contraseña: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            className={styles.Password}
            autoComplete="off"
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Tu Contraseña..."
          />

          <label>Rol: </label>
          <ErrorMessage name="role" component="span" />
          <Field
            className={styles.Role}
            autoComplete="off"
            id="inputRole"
            name="role"
            placeholder="user / admin" // Ajusta esto según tus roles
          />

          <button type="submit"> Crear cuenta</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;

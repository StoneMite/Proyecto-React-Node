// const express = require("express");
// const router = express.Router();
// const { User } = require("../models"); // Asegúrate de importar el modelo de usuarios adecuado

// //LA LINEA 6 y 7 sirven solamente para comprobar la conexion
// // router.get("/", async (req, res) => {
// //     res.json("Hellos wolrd");
// //   });

// // Ruta para obtener todos los usuarios
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al obtener usuarios" });
//   }
// });

// // Ruta para registrar un nuevo usuario
// router.post("/", async (req, res) => {
//   const userData = req.body;

//   try {
//     // Crea un nuevo usuario en la base de datos
//     const newUser = await User.create(userData);
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al registrar usuario" });
//   }
// });

// // Otras rutas relacionadas con los usuarios, como inicio de sesión, actualización de perfil, etc., se pueden agregar aquí.

// module.exports = router;

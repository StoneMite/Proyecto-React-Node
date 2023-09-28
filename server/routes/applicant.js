const express = require("express");
const router = express.Router();
const { Applicant } = require("../models"); // Asegúrate de importar el modelo "Applicant" adecuado

// Ruta para obtener todos los solicitantes (applicants)
router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.findAll();
    res.json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitantes" });
  }
});
// las lineas de abajo solo van a encontrar por id cualquier campo de la tabla que se seleccione.
router.get('/byID/:id', async (req, res) => {
  const id = req.params.id;
  const applicant = await Applicant.findByPk(id);
  res.json(applicant);
})

// Ruta para registrar un nuevo solicitante (applicant)
router.post("/", async (req, res) => {
  const applicantData = req.body;

  try {
    // Crea un nuevo solicitante en la base de datos
    const newApplicant = await Applicant.create(applicantData);
    res.status(201).json(newApplicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar solicitante" });
  }
});

// Otras rutas relacionadas con los solicitantes, como actualización de currículum, etc., se pueden agregar aquí.

module.exports = router;

const { Applicant } = require("../models");

// Controlador para obtener todos los solicitantes
exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.findAll();
    res.json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitantes" });
  }
};

// Controlador para obtener un solicitante por su ID
exports.getApplicantById = async (req, res) => {
  const id = req.params.id;
  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Solicitante no encontrado" });
    }
    res.json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitante por ID" });
  }
};

// Controlador para registrar un nuevo solicitante
exports.createApplicant = async (req, res) => {
  const applicantData = req.body;

  try {
    const newApplicant = await Applicant.create(applicantData);
    res.status(201).json(newApplicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar solicitante" });
  }
};

// Controlador para actualizar un solicitante por su ID
exports.updateApplicantById = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Solicitante no encontrado" });
    }
    await applicant.update(updatedData);
    res.json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar solicitante por ID" });
  }
};

// Controlador para eliminar un solicitante por su ID
exports.deleteApplicantById = async (req, res) => {
  const id = req.params.id;

  try {
    const applicant = await Applicant.findByPk(id);
    if (!applicant) {
      return res.status(404).json({ error: "Solicitante no encontrado" });
    }
    await applicant.destroy();
    res.json({ message: "Solicitante eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar solicitante por ID" });
  }
};

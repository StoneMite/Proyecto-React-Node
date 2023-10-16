const { RequestReplacement } = require("../models");

// Controlador para obtener todas las solicitudes de reemplazo
exports.getAllRequestReplacements = async (req, res) => {
  try {
    const requestReplacements = await RequestReplacement.findAll();
    res.json(requestReplacements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitudes de reemplazo" });
  }
};

// Controlador para obtener una solicitud de reemplazo por su Id
exports.getRequestReplacementById = async (req, res) => {
  const id = req.params.id;
  try {
    const request = await RequestReplacement.findByPk(id);
    if (!request) {
      return res.status(404).json({ error: "Solicitud de reemplazo no encontrado" });
    }
    res.json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener solicitud de reemplazo por ID" });
  }
};

// Controlador para registrar una nueva solicitud de reemplazo
exports.createRequestReplacement = async (req, res) => {
  const requestReplacementData = req.body;

  try {
    // Crea una nueva solicitud de reemplazo en la base de datos
    const newRequestReplacement = await RequestReplacement.create(requestReplacementData);
    res.status(201).json(newRequestReplacement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar solicitud de reemplazo" });
  }
};

// Puedes agregar otros controladores relacionados con las solicitudes de reemplazo, como actualizar, eliminar, etc., según tus necesidades.

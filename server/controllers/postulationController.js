// postulationController.js

const { Applicant, RequestReplacement } = require('../models');

const applyForRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { applicantId } = req.user; // Suponiendo que el ID del solicitante esté en req.user

    // Verificar si el solicitante ya se ha postulado a esta solicitud
    const existingPostulation = await Applicant.findOne({
      where: { requestId },
    });

    if (existingPostulation) {
      return res.status(400).json({ error: "Ya te has postulado a esta solicitud" });
    }

    // Asocia la solicitud de reemplazo con el solicitante (currículum)
    const requestReplacement = await RequestReplacement.findByPk(requestId);
    if (!requestReplacement) {
      return res.status(404).json({ error: "Solicitud de reemplazo no encontrada" });
    }

    // Asocia el solicitante con la solicitud de reemplazo
    await requestReplacement.setApplicant(applicantId);

    return res.status(201).json({ message: "Postulación exitosa" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al procesar la postulación" });
  }
};

module.exports = {
  applyForRequest,
};

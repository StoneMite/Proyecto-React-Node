const { Punctuation, Applicant, RequestReplacement } = require('../models');

const applyForRequest = async (req, res) => {
    try {
      const { applicantId, requestId } = req.body;
  
      // Primero, asegúrate de que tanto el solicitante como la solicitud de reemplazo existan.
      const applicant = await Applicant.findByPk(applicantId);
      const requestReplacement = await RequestReplacement.findByPk(requestId);
  
      if (!applicant || !requestReplacement) {
        return res.status(404).json({ error: "Solicitante o solicitud de reemplazo no encontrados." });
      }
  
      // Verifica si el solicitante ya ha realizado una postulación para esta solicitud
      const existingPostulation = await Postulation.findOne({
        where: { applicantId: applicant.id, requestId: requestReplacement.id },
      });
  
      if (existingPostulation) {
        return res.status(400).json({ error: "Ya has realizado una postulación para esta solicitud." });
      }
  
      // Registra la postulación
      await Postulation.create({ applicantId: applicant.id, requestId: requestReplacement.id });
  
      // Luego, calcula la puntuación total para el solicitante como lo hiciste antes.
  
      const totalScore = calculateTotalScore(applicant, requestReplacement);
  
      // Actualiza o crea un registro en la tabla Punctuation.
  
      const punctuation = await Punctuation.findOne({ where: { applicantId: applicant.id } });
  
      if (punctuation) {
        // Si el registro ya existe, actualiza el totalScore.
        await punctuation.update({ totalScore });
      } else {
        // Si no existe, crea un nuevo registro.
        await Punctuation.create({ applicantId: applicant.id, totalScore });
      }
  
      // Envía una respuesta al frontend para indicar que la postulación se ha completado
      return res.status(200).json({ message: "Postulación finalizada exitosamente." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al procesar la solicitud de reemplazo." });
    }
  };
  
module.exports = {
  applyForRequest,
};

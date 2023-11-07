// const { ApplicantApplication } = require('../models'); // Importa el modelo de la tabla ApplicantApplication

// const applyForRequest = async (req, res) => {
//   try {
//     const { applicantId, requestId } = req.body; // Supongamos que estos valores se obtienen del cuerpo de la solicitud

//     // Verifica si el usuario ya se ha postulado a esta solicitud
//     const existingApplication = await ApplicantApplication.findOne({
//       where: { applicantId, requestId },
//     });

//     if (existingApplication) {
//       return res.status(400).json({ error: 'El usuario ya se ha postulado a esta solicitud.' });
//     }

//     // Si el usuario no se ha postulado previamente, crea un nuevo registro en la tabla ApplicantApplication
//     const newApplication = await ApplicantApplication.create({
//       applicantId,
//       requestId,
//       applicationDate: new Date(), // Puedes establecer la fecha actual aquí
//     });

//     return res.status(200).json(newApplication);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Error al procesar la postulación.' });
//   }
// };

// module.exports = {
//   applyForRequest,
// };

// middleware/validationMiddleware.js

const Joi = require('joi');

// Schema de validación para los datos del solicitante
const applicantSchema = Joi.object({
  jobTitle: Joi.string().required(),
  company: Joi.string().required(),
  // Agrega más validaciones según tus necesidades
});

// Middleware para validar los datos antes de crear un solicitante
exports.validateApplicantData = (req, res, next) => {
  const { error } = applicantSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const express = require('express');
const router = express.Router();
const postulationController = require('../controllers/postulationController');

// Ruta para la postulación
router.post('/', postulationController.applyForRequest);

module.exports = router;

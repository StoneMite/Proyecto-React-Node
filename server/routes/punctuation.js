const express = require('express');
const router = express.Router();
const punctuationController = require('../controllers/punctuationController');

// Ruta para calcular la puntuación de un solicitante
router.post('/calculate-score/:applicantId', punctuationController.calculateScore);
// // de todos los solicitantes
// router.post('/calculate-scores', punctuationController.calculateAllScores);

module.exports = router;

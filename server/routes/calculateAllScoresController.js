const express = require('express');
const router = express.Router();
const punctuationController = require('../controllers/calculateAllScoresController');

// De todos los solicitantes
router.get('/', punctuationController.calculateAllScores);
console.log('Ruta de cálculo de puntuaciones registrada desde el servidor');
module.exports = router;

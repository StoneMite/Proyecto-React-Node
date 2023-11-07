const express = require('express');
const router = express.Router();
const postulationController = require('../controllers/postulationController');
const { validateToken } = require('../middlewares/newAuthMiddleware');
// const { validateToken } = require('../middlewares/newAuthMiddleware');

// Ruta para postularse a una solicitud de reemplazo
router.post("/:requestId/apply",validateToken, postulationController.applyForRequest);

module.exports = router;

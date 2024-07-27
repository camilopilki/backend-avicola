const express = require('express');
const router = express.Router();
const aveClinicaController = require('../controllers/aveClinicaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authMiddleware, aveClinicaController.registerAveClinica);
router.get('/', authMiddleware, aveClinicaController.getAllAvesClinica);
router.get('/:id', authMiddleware, aveClinicaController.getAveClinicaById);
router.put('/:id', authMiddleware, aveClinicaController.updateAveClinica);
router.delete('/:id', authMiddleware, aveClinicaController.deleteAveClinica);

module.exports = router;

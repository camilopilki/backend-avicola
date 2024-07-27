const express = require('express');
const router = express.Router();
const aveController = require('../controllers/aveController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authMiddleware, aveController.registerAve);
router.get('/', authMiddleware, aveController.getAves);
router.get('/cantidad-por-raza', authMiddleware, aveController.getCantidadAvesPorRaza);
router.put('/:id', authMiddleware, aveController.updateAve);
router.delete('/:id', authMiddleware, aveController.deleteAve);

module.exports = router;

const express = require('express');
const router = express.Router();
const aveEnfermaController = require('../controllers/aveEnfermaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authMiddleware, aveEnfermaController.registerAveEnferma);
router.get('/', authMiddleware, aveEnfermaController.getAllAvesEnfermas);
router.get('/:id', authMiddleware, aveEnfermaController.getAveEnfermaById);
router.put('/:id', authMiddleware, aveEnfermaController.updateAveEnferma);
router.delete('/:id', authMiddleware, aveEnfermaController.deleteAveEnferma);

module.exports = router;

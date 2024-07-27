const express = require('express');
const router = express.Router();
const jaulaController = require('../controllers/jaulaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authMiddleware, jaulaController.registerJaula);
router.get('/', authMiddleware, jaulaController.getAllJaulas);
router.get('/:id', authMiddleware, jaulaController.getJaulaById);
router.put('/:id', authMiddleware, jaulaController.updateJaula);
router.delete('/:id', authMiddleware, jaulaController.deleteJaula);
module.exports = router;
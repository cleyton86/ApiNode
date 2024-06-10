const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rotas públicas
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rotas protegidas (exemplo)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Este é o perfil do usuário!' });
});

module.exports = router;

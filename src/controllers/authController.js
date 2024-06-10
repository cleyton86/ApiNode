const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {
  register: (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password }, (err, result) => {
      if (err) return res.status(500).json({ message: 'Erro ao registrar usuário.' });
      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, user) => {
      if (err || !user) return res.status(401).json({ message: 'Credenciais inválidas.' });
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err || !isMatch) return res.status(401).json({ message: 'Credenciais inválidas.' });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      });
    });
  }
};

module.exports = authController;

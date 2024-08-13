const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dados mockados
const usuarios = [
  { id: 1, nome: 'Cleyton', email: 'cleyton@example.com' },
  { id: 2, nome: 'Ana', email: 'ana@example.com' },
  { id: 3, nome: 'Carlos', email: 'carlos@example.com' }
];

// Rota para obter todos os usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota para obter um usuário específico pelo ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.status(404).send('Usuário não encontrado');
  }
  res.json(usuario);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

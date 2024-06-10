const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const db = require('./config/db');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

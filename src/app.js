const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;

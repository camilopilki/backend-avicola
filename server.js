require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const jaulaRoutes = require('./src/routes/jaulaRoutes');
const aveRoutes = require('./src/routes/aveRoutes');
const aveEnfermaRoutes = require('./src/routes/aveEnfermaRoutes');
const aveClinicaRoutes = require('./src/routes/aveClinicaRoutes');

// Configurar el middleware para parsear JSON
app.use(express.json());

// Configurar CORS con opciones específicas
app.use(cors({
  origin: 'http://localhost:9000', // Reemplaza con la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Rutas
app.use('/api/jaula', jaulaRoutes);
app.use('/api/aves', aveRoutes);
app.use('/api/aveEnferma', aveEnfermaRoutes);
app.use('/api/aveClinica', aveClinicaRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

module.exports = app;

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
  origin: ['http://localhost:9000', 'https://avicola-staluisa-71d0d1a32774.herokuapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.DB_USER || 'pvnuc41wie039e30',
  password: process.env.DB_PASSWORD || 'x0ega1yxmk998sv0',
  database: process.env.DB_NAME || 'qdegpwc8nrfijz1s',
  port: process.env.DB_PORT || 3306
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Salir si hay un error de conexión
  } else {
    console.log('Conectado a MySQL');
  }
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

// src/models/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.DB_USER || 'pvnuc41wie039e30',
  password: process.env.DB_PASSWORD || 'x0ega1yxmk998sv0',
  database: process.env.DB_NAME || 'qdegpwc8nrfijz1s',
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error de coneccion:', err);
    throw err;
  }
  console.log('Conectado a MYSQL');
});

module.exports = db;

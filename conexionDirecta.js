const mysql = require('mysql2');

console.log("Iniciando conexión...");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'camilo_p',
  password: 'pilki@70812',
  database: 'base_avicola'
});

console.log("Conexión configurada, intentando conectar...");

connection.connect(function(err) {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con éxito');
  
  connection.query('SELECT 1 + 1 AS solution', function(err, results, fields) {
    if (err) {
      console.error('Error ejecutando consulta:', err);
      return;
    }
    console.log('El resultado de la consulta es:', results[0].solution);
    
    connection.end(function(err) {
      if (err) {
        console.error('Error cerrando la conexión:', err);
        return;
      }
      console.log('Conexión cerrada con éxito');
    });
  });
});

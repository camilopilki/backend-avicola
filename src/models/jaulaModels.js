const db = require('./db');

exports.registerJaula = (data, callback) => {
  const { Id_Jaula, Id_Estanque, Descripcion } = data;
  const sql = 'INSERT INTO jaula (Id_Jaula, Id_Estanque, Descripcion) VALUES (?, ?, ?)';
  db.query(sql, [Id_Jaula, Id_Estanque, Descripcion], callback);
};

exports.getAllJaulas = (callback) => {
  const sql = `
    SELECT jaula.*, COUNT(Ave.Id_Ave) AS Cantidad_Aves
    FROM jaula
    LEFT JOIN Ave ON jaula.Id_Jaula = Ave.Id_Jaula
    GROUP BY jaula.Id_Jaula;
  `;
  db.query(sql, callback);
};

exports.getJaulaById = (id, callback) => {
  const sql = 'SELECT * FROM jaula WHERE Id_Jaula = ?';
  db.query(sql, [id], callback);
};

exports.updateJaula = (id, data, callback) => {
  const { Id_Estanque, Descripcion } = data;
  const sql = 'UPDATE jaula SET Id_Estanque = ?, Descripcion = ? WHERE Id_Jaula = ?';
  db.query(sql, [Id_Estanque, Descripcion, id], callback);
};

exports.deleteJaula = (id, callback) => {
  const sql = 'DELETE FROM jaula WHERE Id_Jaula = ?';
  db.query(sql, [id], callback);
};

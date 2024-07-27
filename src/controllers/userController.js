const db = require('../config/database');

exports.getAllUsers = (req, res) => {
  let sql = 'SELECT * FROM Usuario';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  let newUser = req.body;
  let sql = 'INSERT INTO Usuario SET ?';
  db.query(sql, newUser, (err, result) => {
    if (err) throw err;
    res.send('Usuario añadido...');
  });
};
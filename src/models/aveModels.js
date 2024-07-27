const db = require('./db');

const registerAve = (data, callback) => {
    const sql = 'INSERT INTO Ave (Id_Jaula, Fecha_Registro, Raza, Edad) VALUES (?, ?, ?, ?)';
    db.query(sql, [data.Id_Jaula, data.Fecha_Registro, data.Raza, data.Edad], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

const getAves = (callback) => {
    const sql = 'SELECT * FROM Ave';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

const updateAve = (id, data, callback) => {
    const sql = 'UPDATE Ave SET Id_Jaula = ?, Fecha_Registro = ?, Raza = ?, Edad = ? WHERE Id_Ave = ?';
    db.query(sql, [data.Id_Jaula, data.Fecha_Registro, data.Raza, data.Edad, id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

const deleteAve = (id, callback) => {
    const sql = 'DELETE FROM Ave WHERE Id_Ave = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

const deleteAvesByJaulaId = (id, callback) => {
    const sql = 'DELETE FROM Ave WHERE Id_Jaula = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

const getCantidadAvesPorRaza = (callback) => {
    const sql = 'SELECT Raza, COUNT(*) as Cantidad FROM Ave GROUP BY Raza';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};
module.exports = { registerAve, getAves, updateAve, deleteAve, deleteAvesByJaulaId, getCantidadAvesPorRaza};
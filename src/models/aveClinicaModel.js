const db = require('./db');

exports.registerAveClinica = (data, callback) => {
    const { Id_Ave, Id_Jaula, Fecha_Inicio, Fecha_Fin } = data;
    const sql = 'INSERT INTO Ave_Clinica (Id_Ave, Id_Jaula, Fecha_Inicio, Fecha_Fin) VALUES (?, ?, ?, ?)';
    db.query(sql, [Id_Ave, Id_Jaula, Fecha_Inicio, Fecha_Fin], callback);
};

exports.getAllAvesClinica = (callback) => {
    const sql = 'SELECT * FROM Ave_Clinica';
    db.query(sql, callback);
};

exports.getAveClinicaById = (id, callback) => {
    const sql = 'SELECT * FROM Ave_Clinica WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

exports.updateAveClinica = (id, data, callback) => {
    const { Id_Jaula, Fecha_Inicio, Fecha_Fin } = data;
    const sql = 'UPDATE Ave_Clinica SET Id_Jaula = ?, Fecha_Inicio = ?, Fecha_Fin = ? WHERE Id_Ave = ?';
    db.query(sql, [Id_Jaula, Fecha_Inicio, Fecha_Fin, id], callback);
};

exports.deleteAveClinica = (id, callback) => {
    const sql = 'DELETE FROM Ave_Clinica WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

const deleteAvesEnClinicaByJaulaId = (id, callback) => {
    const sql = 'DELETE FROM ave_clinica WHERE Id_Jaula = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};
module.exports = { deleteAvesEnClinicaByJaulaId };
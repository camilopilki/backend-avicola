const db = require('./db');

exports.registerAveEnferma = (data, callback) => {
    const { Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = data;
    const sql = 'INSERT INTO aves_enfermas (Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion) VALUES (?, ?, ?, ?)';
    db.query(sql, [Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion], callback);
};

exports.getAllAvesEnfermas = (callback) => {
    const sql = 'SELECT * FROM aves_enfermas';
    db.query(sql, callback);
};

exports.getAveEnfermaById = (id, callback) => {
    const sql = 'SELECT * FROM aves_enfermas WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

exports.updateAveEnferma = (id, data, callback) => {
    const { Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = data;
    const sql = 'UPDATE aves_enfermas SET Fecha_Inicio = ?, Fecha_Fin = ?, Caracteristicas_Lesion = ? WHERE Id_Ave = ?';
    db.query(sql, [Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion, id], callback);
};

exports.deleteAveEnferma = (id, callback) => {
    const sql = 'DELETE FROM aves_enfermas WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

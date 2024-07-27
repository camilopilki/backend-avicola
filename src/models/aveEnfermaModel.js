const db = require('./db');

exports.registerAveEnferma = (data, callback) => {
    const { Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = data;
    const sql = 'INSERT INTO Aves_Enfermas (Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion) VALUES (?, ?, ?, ?)';
    db.query(sql, [Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion], callback);
};

exports.getAllAvesEnfermas = (callback) => {
    const sql = 'SELECT * FROM Aves_Enfermas';
    db.query(sql, callback);
};

exports.getAveEnfermaById = (id, callback) => {
    const sql = 'SELECT * FROM Aves_Enfermas WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

exports.updateAveEnferma = (id, data, callback) => {
    const { Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = data;
    const sql = 'UPDATE Aves_Enfermas SET Fecha_Inicio = ?, Fecha_Fin = ?, Caracteristicas_Lesion = ? WHERE Id_Ave = ?';
    db.query(sql, [Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion, id], callback);
};

exports.deleteAveEnferma = (id, callback) => {
    const sql = 'DELETE FROM Aves_Enfermas WHERE Id_Ave = ?';
    db.query(sql, [id], callback);
};

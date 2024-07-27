const db = require('../models/aveClinicaModel');

exports.registerAveClinica = (req, res) => {
    const { Id_Ave, Id_Jaula, Fecha_Inicio, Fecha_Fin } = req.body;
    db.registerAveClinica({ Id_Ave, Id_Jaula, Fecha_Inicio, Fecha_Fin }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave en clínica registrada con éxito');
    });
};

exports.getAllAvesClinica = (req, res) => {
    db.getAllAvesClinica((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getAveClinicaById = (req, res) => {
    const { id } = req.params;
    db.getAveClinicaById(id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send('Ave en clínica no encontrada');
        res.json(result[0]);
    });
};

exports.updateAveClinica = (req, res) => {
    const { id } = req.params;
    const { Id_Jaula, Fecha_Inicio, Fecha_Fin } = req.body;
    db.updateAveClinica(id, { Id_Jaula, Fecha_Inicio, Fecha_Fin }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave en clínica actualizada con éxito');
    });
};

exports.deleteAveClinica = (req, res) => {
    const { id } = req.params;
    db.deleteAveClinica(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave en clínica eliminada con éxito');
    });
};

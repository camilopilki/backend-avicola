const aveEnfermaModel = require('../models/aveEnfermaModel');

exports.registerAveEnferma = (req, res) => {
    const { Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = req.body;
    aveEnfermaModel.registerAveEnferma({ Id_Ave, Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave enferma registrada con éxito');
    });
};

exports.getAllAvesEnfermas = (req, res) => {
    aveEnfermaModel.getAllAvesEnfermas((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getAveEnfermaById = (req, res) => {
    const { id } = req.params;
    aveEnfermaModel.getAveEnfermaById(id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send('Ave enferma no encontrada');
        res.json(result[0]);
    });
};

exports.updateAveEnferma = (req, res) => {
    const { id } = req.params;
    const { Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion } = req.body;
    aveEnfermaModel.updateAveEnferma(id, { Fecha_Inicio, Fecha_Fin, Caracteristicas_Lesion }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave enferma actualizada con éxito');
    });
};

exports.deleteAveEnferma = (req, res) => {
    const { id } = req.params;
    aveEnfermaModel.deleteAveEnferma(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Ave enferma eliminada con éxito');
    });
};

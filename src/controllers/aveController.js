const aveModel = require('../models/aveModels');

exports.registerAve = (req, res) => {
    const { Id_Jaula, Fecha_Registro, Raza, Edad } = req.body;
    const data = { Id_Jaula, Fecha_Registro, Raza, Edad };

    aveModel.registerAve(data, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Ave registrada con éxito');
    });
};

exports.getAves = (req, res) => {
    aveModel.getAves((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.updateAve = (req, res) => {
    const id = req.params.id;
    const { Id_Jaula, Fecha_Registro, Raza, Edad } = req.body;
    const data = { Id_Jaula, Fecha_Registro, Raza, Edad };

    aveModel.updateAve(id, data, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Ave actualizada con éxito');
    });
};

exports.deleteAve = (req, res) => {
    const id = req.params.id;

    aveModel.deleteAve(id, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Ave eliminada con éxito');
    });
};

exports.getCantidadAvesPorRaza = (req, res) => {
    aveModel.getCantidadAvesPorRaza((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

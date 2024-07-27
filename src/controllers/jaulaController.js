const jaulaModel = require('../models/jaulaModels');
const aveModel = require('../models/aveModels');
const aveClinicaModel = require('../models/aveClinicaModel'); // Asegúrate de que esta línea esté presente y la ruta sea correcta

exports.registerJaula = (req, res) => {
    const { Id_Jaula, Descripcion } = req.body;
    const Id_Estanque = 1; // Establecer el Id_Estanque por defecto a 1
    jaulaModel.registerJaula({ Id_Jaula, Id_Estanque, Descripcion }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Jaula registrada con éxito');
    });
};

exports.getAllJaulas = (req, res) => {
    jaulaModel.getAllJaulas((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getJaulaById = (req, res) => {
    const { id } = req.params;
    jaulaModel.getJaulaById(id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send('Jaula no encontrada');
        res.json(result[0]);
    });
};

exports.updateJaula = (req, res) => {
    const { id } = req.params;
    const { Id_Estanque, Descripcion } = req.body;
    jaulaModel.updateJaula(id, { Id_Estanque, Descripcion }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Jaula actualizada con éxito');
    });
};

exports.deleteJaula = (req, res) => {
    const { id } = req.params;
    const { force } = req.query;

    if (force === 'true') {
        // Eliminar aves y aves en clínica asociadas antes de eliminar la jaula
        aveModel.deleteAvesByJaulaId(id, (err) => {
            if (err) {
                console.error('Error al eliminar aves:', err);
                return res.status(500).send(err);
            }

            aveClinicaModel.deleteAvesEnClinicaByJaulaId(id, (err) => {
                if (err) {
                    console.error('Error al eliminar aves en clínica:', err);
                    return res.status(500).send(err);
                }

                jaulaModel.deleteJaula(id, (err, result) => {
                    if (err) {
                        console.error('Error al eliminar jaula:', err);
                        return res.status(500).send(err);
                    }
                    if (result.affectedRows === 0) {
                        console.log('Jaula no encontrada');
                        return res.status(404).send('Jaula no encontrada');
                    }
                    console.log('Jaula eliminada con éxito');
                    res.send('Jaula eliminada con éxito');
                });
            });
        });
    } else {
        jaulaModel.deleteJaula(id, (err, result) => {
            if (err) {
                if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                    console.error('Error al eliminar jaula: Jaula tiene aves asociadas');
                    return res.status(400).send('No se puede eliminar la jaula porque tiene aves asociadas');
                }
                console.error('Error al eliminar jaula:', err);
                return res.status(500).send(err);
            }
            if (result.affectedRows === 0) {
                console.log('Jaula no encontrada');
                return res.status(404).send('Jaula no encontrada');
            }
            console.log('Jaula eliminada con éxito');
            res.send('Jaula eliminada con éxito');
        });
    }
};

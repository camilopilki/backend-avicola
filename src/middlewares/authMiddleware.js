// Middleware de autenticación de ejemplo
module.exports = (req, res, next) => {
    // Aquí iría la lógica para verificar si el usuario está autenticado
    next();
  };
  
// Reglas de validación
const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LONGITUD_MINIMA = 8;

// Validar correo electrónico
function validarCorreo(correo) {
    return EXPRESION_CORREO.test(correo);
}

// Validar contraseña
function validarContrasena(contrasena) {
    return contrasena.length >= LONGITUD_MINIMA;
}

// Exportar funciones
module.exports = {
    validarCorreo,
    validarContrasena
};
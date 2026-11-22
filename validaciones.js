function validarCorreo(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

function validarContrasena(contrasena) {
    return contrasena.length >= 8;
}

module.exports = {
    validarCorreo,
    validarContrasena
};
const assert = require('node:assert');
const {
    validarCorreo,
    validarContrasena
} = require('./validaciones');

// Pruebas del correo
assert.strictEqual(validarCorreo('usuario@gmail.com'), true);
assert.strictEqual(validarCorreo('usuariogmail.com'), false);

// Pruebas de contraseña
assert.strictEqual(validarContrasena('12345678'), true);
assert.strictEqual(validarContrasena('1234'), false);

console.log('¡Todas las pruebas pasaron!');
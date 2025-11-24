// features/step_definitions/recuperacion_contrasena_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');

// Estado global para el flujo de recuperación de contraseña
let estadoRecuperacion = {
    enlaceValido: false,
    tiempoTranscurrido: 0,
    formularioCompletado: false,
    camposLlenados: {},
    requisitosCumplidos: {},
    contraseñaActualizada: false,
    mensajesError: [],
    redirigidoALogin: false,
    emailConfirmacionEnviado: false
};

Given('que he solicitado recuperar mi contraseña', function () {
    estadoRecuperacion = {
        enlaceValido: false,
        tiempoTranscurrido: 0,
        formularioCompletado: false,
        camposLlenados: {},
        requisitosCumplidos: {},
        contraseñaActualizada: false,
        mensajesError: [],
        redirigidoALogin: false,
        emailConfirmacionEnviado: false
    };
    return 'pending';
});

Given('he recibido un enlace de recuperación por email', function () {
    estadoRecuperacion.enlaceValido = true;
    return 'pending';
});

Given('que el enlace fue enviado hace {int} horas', function (horas) {
    estadoRecuperacion.tiempoTranscurrido = horas;
    estadoRecuperacion.enlaceValido = horas < 24; // Válido por 24 horas
    return 'pending';
});

Given('que el enlace fue enviado hace {int} días', function (dias) {
    estadoRecuperacion.tiempoTranscurrido = dias * 24;
    estadoRecuperacion.enlaceValido = false; // Más de 24 horas = inválido
    return 'pending';
});

Given('que estoy en el formulario de nueva contraseña', function () {
    estadoRecuperacion.enlaceValido = true;
    return 'pending';
});

When('accedo al enlace de recuperación', function () {
    // Simular acceso al enlace
    return 'pending';
});

When('ingreso {string} en el campo nueva contraseña', function (contrasena) {
    estadoRecuperacion.camposLlenados.nuevaContrasena = contrasena;
    estadoRecuperacion.requisitosCumplidos = validarRequisitosContrasena(contrasena);
    return 'pending';
});

When('ingreso {string} en el campo confirmar contraseña', function (contrasena) {
    estadoRecuperacion.camposLlenados.confirmarContrasena = contrasena;

    // Verificar si las contraseñas coinciden
    if (estadoRecuperacion.camposLlenados.nuevaContrasena === contrasena) {
        estadoRecuperacion.contraseñasCoinciden = true;
    } else {
        estadoRecuperacion.mensajesError.push('Las contraseñas no coinciden');
    }
    return 'pending';
});

When('presiono el botón {string}', function (boton) {
    if (boton === 'Cambiar Contraseña') {
        // Validar si se puede actualizar la contraseña
        estadoRecuperacion.contraseñaActualizada =
            estadoRecuperacion.enlaceValido &&
            estadoRecuperacion.camposLlenados.nuevaContrasena &&
            estadoRecuperacion.camposLlenados.confirmarContrasena &&
            estadoRecuperacion.contraseñasCoinciden &&
            estadoRecuperacion.requisitosCumplidos.todosCumplidos;

        if (estadoRecuperacion.contraseñaActualizada) {
            estadoRecuperacion.redirigidoALogin = true;
            estadoRecuperacion.emailConfirmacionEnviado = true;
        }
    }
    return 'pending';
});

When('dejo vacío el campo confirmar contraseña', function () {
    estadoRecuperacion.camposLlenados.confirmarContrasena = '';
    estadoRecuperacion.mensajesError.push('Confirma tu nueva contraseña');
    return 'pending';
});

When('dejo todos los campos vacíos', function () {
    estadoRecuperacion.camposLlenados.nuevaContrasena = '';
    estadoRecuperacion.camposLlenados.confirmarContrasena = '';
    estadoRecuperacion.mensajesError.push('La contraseña es requerida');
    return 'pending';
});

When('ingreso {string} en el campo nueva contraseña', function (contrasena) {
    estadoRecuperacion.camposLlenados.nuevaContrasena = contrasena;
    estadoRecuperacion.requisitosCumplidos = validarRequisitosContrasena(contrasena);
    return 'pending';
});

When('ingreso mi contraseña anterior', function () {
    estadoRecuperacion.camposLlenados.nuevaContrasena = 'OldPassword123!';
    estadoRecuperacion.camposLlenados.confirmarContrasena = 'OldPassword123!';
    estadoRecuperacion.mensajesError.push('No puedes usar tu contraseña anterior');
    return 'pending';
});

Then('debería ver el formulario para crear nueva contraseña', function () {
    return 'pending';
});

Then('el enlace debería ser válido', function () {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensaje) {
    return 'pending';
});

Then('debería ver la opción para solicitar un nuevo enlace', function () {
    return 'pending';
});

Then('la contraseña debería actualizarse exitosamente', function () {
    return 'pending';
});

Then('debería recibir un email de confirmación', function () {
    return 'pending';
});

Then('debería ser redirigido a la pantalla de login', function () {
    return 'pending';
});

Then('la contraseña no debería actualizarse', function () {
    return 'pending';
});

Then('debería ver múltiples mensajes de error', function () {
    return 'pending';
});

Then('la contraseña debería cumplir con {int} caracteres mínimo', function (minCaracteres) {
    return 'pending';
});

Then('debería cumplir con al menos una mayúscula', function () {
    return 'pending';
});

Then('debería cumplir con al menos un número', function () {
    return 'pending';
});

Then('debería cumplir con al menos un carácter especial', function () {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensaje) {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensaje) {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensaje) {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensaje) {
    return 'pending';
});

Then('las contraseñas no coinciden', function () {
    return 'pending';
});

// Función helper para validar requisitos de contraseña
function validarRequisitosContrasena(contrasena) {
    const requisitos = {
        longitudMinima: contrasena.length >= 8,
        tieneMayuscula: /[A-Z]/.test(contrasena),
        tieneNumero: /[0-9]/.test(contrasena),
        tieneEspecial: /[!@#$%^&*(),.?":{}|<>]/.test(contrasena),
        todosCumplidos: false
    };

    requisitos.todosCumplidos =
        requisitos.longitudMinima &&
        requisitos.tieneMayuscula &&
        requisitos.tieneNumero &&
        requisitos.tieneEspecial;

    return requisitos;
}

// Exportar el estado para tests
module.exports = { estadoRecuperacion };
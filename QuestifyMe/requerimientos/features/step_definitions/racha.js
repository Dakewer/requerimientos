// features/step_definitions/racha_acceso_consecutivo_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');

// Estado global para la racha de acceso
let estadoRacha = {
    cuentaRegistrada: false,
    cuentaVerificada: false,
    personajeCreado: false,
    ultimaSesion: null,
    rachaActual: 0,
    fechaDispositivoCorrecta: true,
    permisosOtorgados: true,
    serviciosDisponibles: true,
    accesoRegistrado: false,
    rachaIncrementada: false,
    mensajeError: '',
    redireccionado: false
};

Given('que tengo una cuenta registrada y verificada', function () {
    estadoRacha.cuentaRegistrada = true;
    estadoRacha.cuentaVerificada = true;
    return 'pending';
});

Given('mi última sesión fue ayer', function () {
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    estadoRacha.ultimaSesion = ayer;
    return 'pending';
});

Given('mi última sesión fue hoy más temprano', function () {
    estadoRacha.ultimaSesion = new Date();
    return 'pending';
});

Given('mi racha actual es de {int} días', function (dias) {
    estadoRacha.rachaActual = dias;
    return 'pending';
});

Given('que no tengo una cuenta registrada', function () {
    estadoRacha.cuentaRegistrada = false;
    estadoRacha.cuentaVerificada = false;
    return 'pending';
});

Given('intento acceder a la aplicación', function () {
    // Simular intento de acceso
    return 'pending';
});

Given('mi personaje está creado y configurado', function () {
    estadoRacha.personajeCreado = true;
    return 'pending';
});

Given('no he creado mi personaje aún', function () {
    estadoRacha.personajeCreado = false;
    return 'pending';
});

Given('es mi primer acceso del día', function () {
    estadoRacha.ultimaSesion = null;
    return 'pending';
});

Given('la fecha del dispositivo es correcta', function () {
    estadoRacha.fechaDispositivoCorrecta = true;
    return 'pending';
});

Given('la fecha del dispositivo está alterada', function () {
    estadoRacha.fechaDispositivoCorrecta = false;
    return 'pending';
});

Given('el servicio de verificación de fechas está operativo', function () {
    estadoRacha.serviciosDisponibles = true;
    return 'pending';
});

Given('la aplicación tiene permisos necesarios', function () {
    estadoRacha.permisosOtorgados = true;
    return 'pending';
});

Given('la aplicación no tiene permisos necesarios', function () {
    estadoRacha.permisosOtorgados = false;
    return 'pending';
});

Given('intento acceder a funcionalidades restringidas', function () {
    // Simular intento de acceso a funcionalidades que requieren permisos
    return 'pending';
});

When('inicio sesión en la aplicación', function () {
    // Simular proceso de inicio de sesión
    if (estadoRacha.cuentaRegistrada &&
        estadoRacha.cuentaVerificada &&
        estadoRacha.permisosOtorgados &&
        estadoRacha.serviciosDisponibles) {

        estadoRacha.accesoRegistrado = true;

        // Simular cálculo de racha
        if (estadoRacha.personajeCreado && estadoRacha.ultimaSesion) {
            const hoy = new Date();
            const ultimoAcceso = new Date(estadoRacha.ultimaSesion);

            // Verificar si es día consecutivo
            const diferenciaDias = Math.floor((hoy - ultimoAcceso) / (1000 * 60 * 60 * 24));

            if (diferenciaDias === 1) {
                estadoRacha.rachaIncrementada = true;
                estadoRacha.rachaActual += 1;
            } else if (diferenciaDias > 1) {
                estadoRacha.rachaActual = 1; // Reiniciar racha
            }
            // Si diferenciaDias === 0, no hacer nada (mismo día)
        }
    } else {
        estadoRacha.mensajeError = 'Error de autenticación o permisos';
    }
    return 'pending';
});

When('inicio sesión con credenciales inválidas', function () {
    estadoRacha.accesoRegistrado = false;
    estadoRacha.mensajeError = 'Credenciales inválidas';
    return 'pending';
});

Then('mi racha debería incrementarse a {int} días', function (rachaEsperada) {
    return 'pending';
});

Then('debería recibir la recompensa del día {int}', function (dia) {
    return 'pending';
});

Then('no debería registrarse ningún acceso en racha', function () {
    return 'pending';
});

Then('debería ver un mensaje de error de autenticación', function () {
    return 'pending';
});

Then('no debería incrementar mi racha', function () {
    return 'pending';
});

Then('debería ver mi racha actual mantenerse', function () {
    return 'pending';
});

Then('no debería procesarse la racha de acceso', function () {
    return 'pending';
});

Then('debería ser redirigido a la creación de personaje', function () {
    estadoRacha.redireccionado = true;
    return 'pending';
});

Then('la racha debería calcularse correctamente', function () {
    return 'pending';
});

Then('debería usar la fecha del servidor como referencia', function () {
    return 'pending';
});

Then('la racha debería calcularse con la fecha del servidor', function () {
    return 'pending';
});

Then('no debería verse afectada por la fecha incorrecta del dispositivo', function () {
    return 'pending';
});

Then('debería poder registrar mi acceso correctamente', function () {
    return 'pending';
});

Then('la racha debería actualizarse en el servidor', function () {
    return 'pending';
});

Then('debería ver un mensaje solicitando permisos', function () {
    return 'pending';
});

Then('la racha no debería procesarse hasta otorgar permisos', function () {
    return 'pending';
});

// Exportar el estado para tests
module.exports = { estadoRacha };
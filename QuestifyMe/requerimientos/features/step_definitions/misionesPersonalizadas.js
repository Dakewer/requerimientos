// features/step_definitions/misiones_personalizadas_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Estado global para compartir entre steps
let estadoMision = {
    titulo: '',
    objetivo: '',
    atributo: '',
    fecha: null,
    misionCreada: false,
    error: '',
    indicadorUrgente: false,
    xpCalculada: 0
};

Given('que estoy en la pantalla de creación de misiones', function () {
    // Reset del estado para cada scenario
    estadoMision = {
        titulo: '',
        objetivo: '',
        atributo: '',
        fecha: null,
        misionCreada: false,
        error: '',
        indicadorUrgente: false,
        xpCalculada: 0
    };
    return 'pending';
});

When('ingreso {string} en el campo título', function (titulo) {
    estadoMision.titulo = titulo;
    return 'pending';
});

When('dejo el campo título vacío', function () {
    estadoMision.titulo = '';
    return 'pending';
});

When('presiono el botón {string}', function (boton) {
    if (boton === 'Guardar Misión') {
        // Validaciones básicas
        if (!estadoMision.titulo.trim()) {
            estadoMision.error = 'El título es obligatorio';
            estadoMision.misionCreada = false;
        } else if (estadoMision.fecha && estadoMision.fecha < new Date()) {
            estadoMision.error = 'No puedes crear misiones en el pasado';
            estadoMision.misionCreada = false;
        } else {
            estadoMision.misionCreada = true;
            estadoMision.error = '';

            // Asignar valores por defecto si no se proporcionaron
            if (!estadoMision.objetivo) {
                estadoMision.objetivo = 'Sin objetivo específico';
            }
            if (!estadoMision.atributo) {
                estadoMision.atributo = 'Inteligencia';
            }

            // Calcular XP basado en urgencia
            estadoMision.xpCalculada = calcularXP();

            // Determinar si es urgente
            if (estadoMision.fecha) {
                const ahora = new Date();
                const diferencia = estadoMision.fecha - ahora;
                const minutosDiferencia = diferencia / (1000 * 60);
                estadoMision.indicadorUrgente = minutosDiferencia <= 60; // Urgente si es en menos de 1 hora
            }
        }
    }
    return 'pending';
});

When('ingreso {string} en el campo objetivo', function (objetivo) {
    estadoMision.objetivo = objetivo;
    return 'pending';
});

When('dejo el campo objetivo vacío', function () {
    estadoMision.objetivo = '';
    return 'pending';
});

When('selecciono {string} en la lista de atributos', function (atributo) {
    estadoMision.atributo = atributo;
    return 'pending';
});

When('no selecciono ningún atributo de la lista', function () {
    estadoMision.atributo = '';
    return 'pending';
});

When('establezco la fecha para mañana a las {string}', function (hora) {
    const mañana = new Date();
    mañana.setDate(mañana.getDate() + 1);
    const [horas, minutos] = hora.split(':');
    mañana.setHours(parseInt(horas), parseInt(minutos), 0, 0);
    estadoMision.fecha = mañana;
    return 'pending';
});

When('establezco la fecha para dentro de 30 minutos', function () {
    const en30Minutos = new Date();
    en30Minutos.setMinutes(en30Minutos.getMinutes() + 30);
    estadoMision.fecha = en30Minutos;
    return 'pending';
});

When('establezco una fecha que ya pasó', function () {
    const fechaPasada = new Date();
    fechaPasada.setDate(fechaPasada.getDate() - 7); // Una semana atrás
    estadoMision.fecha = fechaPasada;
    return 'pending';
});

Then('la misión debería crearse exitosamente', function () {
    // Esta validación se haría contra el sistema real
    // Por ahora solo verificamos nuestro estado mock
    return 'pending';
});

Then('debería ver la misión en mi lista con el título {string}', function (tituloEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('debería ver el mensaje de error {string}', function (mensajeErrorEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('la misión no debería crearse', function () {
    // Validación contra el sistema real
    return 'pending';
});

Then('debería ver el objetivo {string} en los detalles de la misión', function (objetivoEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('el campo objetivo debería mostrarse como {string}', function (objetivoEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('debería ver el icono de {string} asociado a la misión', function (atributoEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('el sistema debería asignar automáticamente {string} como atributo por defecto', function (atributoEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('debería ver la misión programada para mañana en mi calendario', function () {
    // Validación contra el sistema real
    return 'pending';
});

Then('el sistema debería calcular una recompensa de XP estándar', function () {
    // Validación contra el sistema real
    return 'pending';
});

Then('debería ver un indicador de {string} en la lista', function (indicadorEsperado) {
    // Validación contra el sistema real
    return 'pending';
});

Then('el sistema debería calcular una recompensa de XP con bonificación por urgencia', function () {
    // Validación contra el sistema real
    return 'pending';
});

// Función helper para calcular XP (mock)
function calcularXP() {
    if (!estadoMision.fecha) return 50; // XP base si no hay fecha

    const ahora = new Date();
    const diferencia = estadoMision.fecha - ahora;
    const horasDiferencia = diferencia / (1000 * 60 * 60);

    // XP base más bonificación por urgencia
    let xp = 50;
    if (horasDiferencia <= 1) {
        xp += 25; // Bonificación por urgencia
    }

    return xp;
}

// Exportar el estado para posibles tests unitarios
module.exports = { estadoMision };
When(/^establezco la fecha para mañana a las 14:00$/, function () {

});
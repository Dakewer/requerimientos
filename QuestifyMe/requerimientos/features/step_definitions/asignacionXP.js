// features/step_definitions/asignacion_xp_multiple_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');

// Estado global para la asignación de XP múltiple
let estadoXP = {
    tareaActiva: false,
    estadisticaPrincipal: '',
    estadisticaSecundaria: '',
    xpBase: 0,
    tareaCompletada: false,
    xpAsignada: {},
    errores: []
};

Given('que tengo una tarea activa con estadística principal {string}', function (estadisticaPrincipal) {
    estadoXP.tareaActiva = true;
    estadoXP.estadisticaPrincipal = estadisticaPrincipal;
    estadoXP.xpAsignada = {};
    return 'pending';
});

Given('la tarea no tiene estadística secundaria configurada', function () {
    estadoXP.estadisticaSecundaria = null;
    return 'pending';
});

Given('la tarea tiene estadística secundaria {string} configurada', function (estadisticaSecundaria) {
    estadoXP.estadisticaSecundaria = estadisticaSecundaria;
    return 'pending';
});

Given('la tarea tiene estadística secundaria configurada pero inválida', function () {
    estadoXP.estadisticaSecundaria = 'EstadisticaInexistente';
    return 'pending';
});

Given('la tarea otorga {int} XP base al completarse', function (xpBase) {
    estadoXP.xpBase = xpBase;
    return 'pending';
});

When('marco la tarea como completada', function () {
    estadoXP.tareaCompletada = true;

    // Simular asignación de XP
    if (estadoXP.tareaActiva && estadoXP.estadisticaPrincipal) {
        // XP principal siempre 100%
        estadoXP.xpAsignada[estadoXP.estadisticaPrincipal] = estadoXP.xpBase;

        // XP secundaria 30% si existe y es válida
        if (estadoXP.estadisticaSecundaria && estadoXP.estadisticaSecundaria !== 'EstadisticaInexistente') {
            estadoXP.xpAsignada[estadoXP.estadisticaSecundaria] = Math.ceil(estadoXP.xpBase * 0.3);
        }
    }
    return 'pending';
});

When('no realizo ninguna acción sobre la tarea', function () {
    estadoXP.tareaCompletada = false;
    estadoXP.xpAsignada = {};
    return 'pending';
});

Then('la estadística {string} debería recibir {int} XP', function (estadistica, xpEsperado) {
    return 'pending';
});

Then('ninguna otra estadística debería recibir XP', function () {
    return 'pending';
});

Then('ninguna estadística debería recibir XP', function () {
    return 'pending';
});

Then('la tarea debería permanecer en estado activo', function () {
    return 'pending';
});

Then('el sistema debería ignorar la estadística secundaria inválida', function () {
    return 'pending';
});

// Función helper para cálculos de XP
function calcularXPMultiple(xpBase, tieneSecundaria, secundariaValida) {
    const resultado = {
        principal: xpBase,
        secundaria: 0
    };

    if (tieneSecundaria && secundariaValida) {
        resultado.secundaria = Math.ceil(xpBase * 0.3);
    }

    return resultado;
}

// Exportar el estado para tests
module.exports = { estadoXP, calcularXPMultiple };
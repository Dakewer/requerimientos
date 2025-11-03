const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');

// ===========================================
// PASOS DEL FEATURE: CREAR PERSONAJE
// ===========================================

// Given
Given('que el usuario selecciona una especie disponible', function () {
    // Pendiente de implementar: En el que se simula que el campo de la especie se selecciona.
    return 'pending';
});

Given('que el usuario introduce un nombre válido', function () {
    // Pendiente de implementar: En el que se verifica que el nombre cumple las reglas de validación (longitud, caracteres).
    return 'pending';
});

Given('que el usuario selecciona una clase', function () {
    // Pendiente de implementar: En el que se simula que el campo de la clase se selecciona.
    return 'pending';
});

Given('que el usuario selecciona una vestimenta', function () {
    // Pendiente de implementar: En el que se simula la selección de la vestimenta inicial básica.
    return 'pending';
});

Given('que el usuario acepta el modo rápido', function () {
    // Pendiente de implementar: En el que se invoca la función de creación de personaje con valores por defecto.
    return 'pending';
});

Given('que el usuario intenta finalizar sin seleccionar especie', function () {
    // Pendiente de implementar: En el que se simula el envío del formulario con el campo de especie vacío.
    return 'pending';
});

Given('que el usuario intenta finalizar sin introducir nombre', function () {
    // Pendiente de implementar: En el que se simula el envío del formulario con el campo de nombre vacío.
    return 'pending';
});

// When
When('el usuario selecciona {string}', function (opcion) {
    // Pendiente de implementar: En el que se simula el clic en el botón de la acción principal, por ejemplo "Ver personaje".
    return 'pending';
});

// Then
Then('el personaje aparece en la pantalla principal', function () {
    // Pendiente de implementar: En el que se verifica que la interfaz navega a la pantalla Home.
    return 'pending';
});

Then('el sistema emite un sonido de confirmación', function () {
    // Pendiente de implementar: En el que se verifica que se llama a la función de reproducción de sonido.
    return 'pending';
});

Then('el sistema debería mostrar un mensaje de error indicando que falta la especie', function () {
    // Pendiente de implementar: En el que se verifica el texto de error específico en la interfaz.
    return 'pending';
});

Then('el sistema debería mostrar un mensaje de error indicando que falta el nombre', function () {
    // Pendiente de implementar: En el que se verifica el texto de error específico en la interfaz.
    return 'pending';
});

// ===========================================
// PASOS DEL FEATURE: CANALES DE NOTIFICACIÓN
// ===========================================

// Given
Given('que el usuario tiene las notificaciones activas', function () {
    // Pendiente de implementar: En el que se verifica que los permisos del sistema operativo están concedidos.
    return 'pending';
});

Given('que existe una tarea con recordatorio en {int} minutos', function (minutos) {
    // Pendiente de implementar: En el que se crea una tarea y se establece la hora de activación.
    return 'pending';
});

Given('que el usuario no ha completado tareas por más de {int} horas', function (horas) {
    // Pendiente de implementar: En el que se establece un timestamp de última actividad que supera el umbral.
    return 'pending';
});

Given('que las notificaciones de inactividad están habilitadas', function () {
    // Pendiente de implementar: En el que se verifica que la configuración interna de la app lo permite.
    return 'pending';
});

Given('que el usuario tiene las notificaciones desactivadas en el sistema operativo', function () {
    // Pendiente de implementar: En el que se simula la denegación de permisos a nivel de S.O.
    return 'pending';
});

// When
When('se activa el tiempo del recordatorio', function () {
    // Pendiente de implementar: En el que el servicio o cron job de notificaciones dispara la alerta.
    return 'pending';
});

When('el sistema ejecuta la verificación de inactividad', function () {
    // Pendiente de implementar: En el que se invoca el motor de inactividad de forma manual o programada.
    return 'pending';
});

// Then
Then('se dispara una notificación Pop-up en el que se muestra el mensaje de la tarea', function () {
    // Pendiente de implementar: En el que se verifica la llamada a la API nativa de notificaciones.
    return 'pending';
});

Then('se dispara una notificación interna en el que se muestra el mensaje {string}', function (mensaje) {
    // Pendiente de implementar: En el que se verifica la inserción del mensaje en el feed de la aplicación.
    return 'pending';
});

Then('se registra la notificación en el historial interno de la que se guarda su estado', function () {
    // Pendiente de implementar: En el que se verifica que se insertó un registro en la base de datos de historial de notificaciones.
    return 'pending';
});
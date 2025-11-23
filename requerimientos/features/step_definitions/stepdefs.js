const {
    Given,
    When,
    Then
    // defineParameterType fue removido de aquí
} = require('@cucumber/cucumber');

// =======================================================
// PASOS DEL FEATURE: CREAR PERSONAJE
// =======================================================

Given('que el usuario selecciona una especie disponible', function () {
    return 'pending';
});
Given('que el usuario introduce un nombre válido', function () {
    return 'pending';
});
Given('que el usuario selecciona una clase', function () {
    return 'pending';
});
Given('que el usuario selecciona una vestimenta', function () {
    return 'pending';
});
Given('que el usuario acepta el modo rápido', function () {
    return 'pending';
});
Given('que el usuario intenta finalizar sin seleccionar especie', function () {
    return 'pending';
});
When('el usuario intenta finalizar sin introducir nombre', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
When('el usuario selecciona {string}', function (opcion) {
    return 'pending';
});
Then('el personaje aparece en la pantalla principal', function () {
    return 'pending';
});
Then('el sistema emite un sonido de confirmación', function () {
    return 'pending';
});
Then('el sistema debería mostrar un mensaje de error indicando que falta la especie', function () {
    return 'pending';
});
Then('el sistema debería mostrar un mensaje de error indicando que falta el nombre', function () {
    return 'pending';
});

// =======================================================
// PASOS DEL FEATURE: PERSISTENCIA SESION
// =======================================================

Given('que el usuario inicia la aplicación', function () {
    return 'pending';
});
Given('que el token de sesión almacenado es válido', function () {
    return 'pending';
});
Given('que el token de sesión almacenado ha caducado', function () {
    return 'pending';
});
Given('que el usuario está logueado en la aplicación', function () {
    return 'pending';
});
When('el sistema verifica el estado de la sesión', function () {
    return 'pending';
});
When('el usuario selecciona {string} en el menú de configuración', function (opcion) {
    return 'pending';
});
Then('el usuario es llevado a la pantalla de {string} sin necesidad de loguearse', function (pagina) {
    return 'pending';
});
Then('el usuario es redirigido a la pantalla de {string}', function (pagina) {
    return 'pending';
});
Then('se muestra un mensaje indicando que {string}', function (mensaje) {
    return 'pending';
});
Then('el token de sesión es eliminado del almacenamiento', function () {
    return 'pending';
});

// =======================================================
// PASOS DEL FEATURE: NOTIFICACIONES / RECORDATORIOS
// =======================================================

// Pasos con parámetros (usando el tipo {int} que ahora es nativo)
Given('que existe una tarea con recordatorio en {int} minutos', function (minutos) {
    return 'pending';
});
Given('que el usuario no ha completado tareas por más de {int} horas', function (horas) {
    return 'pending';
});
Then('se registra la notificación en el historial interno con el estado {string}', function (estado) {
    return 'pending';
});
Then('se dispara una notificación interna en el que se muestra el mensaje {string}', function (mensaje) {
    return 'pending';
});

// Pasos sin parámetros
Given('que el usuario tiene las notificaciones activas', function () {
    return 'pending';
});
Given('que las notificaciones de inactividad están habilitadas', function () {
    return 'pending';
});
Given('que el usuario tiene las notificaciones desactivadas en el sistema operativo', function () {
    return 'pending';
});
When('se activa el tiempo del recordatorio', function () {
    return 'pending';
});
When('el sistema ejecuta la verificación de inactividad', function () {
    return 'pending';
});
Then('se dispara una notificación Pop-up en el que se muestra el mensaje de la tarea', function () {
    return 'pending';
});
Then('no se dispara ninguna notificación Pop-up del sistema operativo', function () {
    return 'pending';
});

// Pasos detallados del notificacion.feature
Given('que el usuario está en la pantalla de "Ajustes de Notificaciones"', function () {
    return 'pending';
});
Given('que la aplicación nunca ha solicitado permisos de notificación previamente', function () {
    return 'pending';
});
When('el usuario pulsa el botón de "Activar Notificaciones"', function () {
    return 'pending';
});
Then('el sistema operativo solicita el permiso de notificación', function () {
    return 'pending';
});
Then('al aceptar, el estado de la notificación interna en la aplicación cambia a "Activa"', function () {
    return 'pending';
});
Given('que el usuario tiene las notificaciones de la aplicación activas', function () {
    return 'pending';
});
When('el usuario conmuta el interruptor de Notificaciones a "Desactivado"', function () {
    return 'pending';
});
Then('el estado de la notificación interna en la aplicación cambia a "Inactiva"', function () {
    return 'pending';
});
Then('el sistema no dispara notificaciones Pop-up a partir de ese momento', function () {
    return 'pending';
});
Given('que la aplicación solicita permisos de notificación por primera vez', function () {
    return 'pending';
});
When('el usuario deniega el permiso en el diálogo del sistema operativo', function () {
    return 'pending';
});
Then('la aplicación muestra un mensaje indicando que la función de recordatorios está limitada', function () {
    return 'pending';
});
Then('el estado de la notificación interna en la aplicación se mantiene como "Bloqueada"', function () {
    return 'pending';
});
Given('que el estado de la notificación interna en la aplicación es "Bloqueada"', function () {
    return 'pending';
});
When('el usuario pulsa el botón de "Ir a Ajustes del Sistema"', function () {
    return 'pending';
});
Then('la aplicación debe redirigir al usuario a la configuración de permisos del S.O.', function () {
    return 'pending';
});


// =======================================================
// PASOS DEL FEATURE: RETROALIMENTACIÓN
// =======================================================

// GIVENs - RETROALIMENTACIÓN
Given('que el Sistema de Gamificación ha calculado que la XP acumulada es suficiente para subir al siguiente nivel', function () {
    return 'pending';
});
Given('que la configuración de Animaciones y Efectos Visuales está activa', function () {
    return 'pending';
});
Given('que el usuario tiene la tarea {string} pendiente', function (tarea) {
    return 'pending';
});
Given('que el usuario está en la pantalla principal \\(Home)', function () {
    return 'pending';
});
Given('que el Sistema de Gamificación ha calculado que el personaje subirá de nivel', function () {
    return 'pending';
});
Given('que la configuración de Animaciones y Efectos Visuales está desactivada', function () {
    return 'pending';
});

// WHENs - RETROALIMENTACIÓN
When('el usuario presiona el botón {string}', function (boton) {
    return 'pending';
});
When('el usuario pulsa el botón de {string}', function (boton) {
    return 'pending';
});
When('el usuario toca al Avatar de su personaje', function () {
    return 'pending';
});
When('el usuario completa la acción que dispara la subida de nivel', function () {
    return 'pending';
});

// THENs - RETROALIMENTACIÓN
Then('el sistema debe mostrar una animación de destello en pantalla', function () {
    return 'pending';
});
Then('se debe reproducir un sonido de logro', function () {
    return 'pending';
});
Then('el pop-up {string} debe ser visible', function (mensaje) {
    return 'pending';
});
Then('el estado visual del nivel del personaje se actualiza inmediatamente', function () {
    return 'pending';
});
Then('se debe reproducir una animación de confeti en el área de la tarea', function () {
    return 'pending';
});
Then('se debe reproducir un sonido de confirmación leve', function () {
    return 'pending';
});
Then('el estado de la tarea en la interfaz debe cambiar a {string}', function (estado) {
    return 'pending';
});
Then('el Avatar debe ejecutar una animación lúdica de reacción', function () {
    return 'pending';
});
Then('el sistema debe reproducir un sonido lúdico tipo Tamagotchi', function () {
    return 'pending';
});
Then('se debe reproducir un sonido de confirmación básico', function () {
    return 'pending';
});
Then('no se debe reproducir la animación de destello en pantalla', function () {
    return 'pending';
});
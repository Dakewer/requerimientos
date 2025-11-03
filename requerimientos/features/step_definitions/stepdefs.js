const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Datos minimos steps

Given('que estoy en la pantalla de "Crear Tarea"', function () {
  return 'pending';
});

When('ingreso el Título {string}', function (string) {
  return 'pending';
});

When('ingreso la {string} {string}', function (string, string2) {
  return 'pending';
});

When('selecciono la {string} {string}', function (string, string2) {
  return 'pending';
});

When('presiono el botón "Guardar Tarea"', function () {
  return 'pending';
});

Then('el sistema debe confirmar la {string}', function (string) {
  return 'pending';
});

Then('la tarea {string} debe aparecer en mi {string}', function (string, string2) {
  return 'pending';
});

Then('la tarea {string} debe aparecer en el {string}', function (string, string2) {
  return 'pending';
});

Then('el sistema debe impedir la creación de la tarea', function () {
  return 'pending';
});

Then('el sistema debe mostrar el error {string}', function (string) {
  return 'pending';
});

// Notificaciones Locales Steps

Given('que el usuario tiene permisos de notificación activados', function () {
  return 'pending';
});

Given('existe una tarea {string} con fecha de entrega {string}', function (string, string2) {
  return 'pending';
});

Given('que el dispositivo está {string}', function (string) {
  return 'pending';
});

Given('el usuario ha programado un recordatorio para la tarea {string}', function (string) {
  return 'pending';
});

When('llega la hora del recordatorio {string}', function (string) {
  return 'pending';
});

Then('el sistema debe mostrar una notificación local con el texto {string}', function (string) {
  return 'pending';
});

When('el usuario elimina la tarea {string}', function (string) {
  return 'pending';
});

Then('el sistema no debe mostrar ninguna notificación', function () {
  return 'pending';
});

Given('el usuario ha programado un recordatorio para {string}', function (string) {
  return 'pending';
});

When('el usuario edita la fecha de entrega de la tarea {string} a {string}', function (string, string2) {
  return 'pending';
});

Then('el sistema debe cancelar el recordatorio de las {string}', function (string) {
  return 'pending';
});

Then('el sistema debe programar un nuevo recordatorio para las {string}', function (string) {
  return 'pending';
});
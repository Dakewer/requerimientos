const { Given, When, Then, Before } = require('@cucumber/cucumber');

Before(function () {
  return 'pending';
});


Given(/^el usuario pertenece a un clan válido$/, function () {
  return 'pending';
});

// 1) Líder crea misión de clan
Given(/^el usuario tiene rol "([^"]*)" en el clan$/, function (rol) {
  return 'pending';
});

When(/^el usuario intenta crear una misión de clan$/, function () {
  return 'pending';
});

Then(/^la acción de crear misión de clan es permitida$/, function () {
  return 'pending';
});

Then(/^la misión de clan se registra correctamente$/, function () {
  return 'pending';
});

// 2) Miembro estándar no ve opción de crear misión
When(/^el usuario visualiza las acciones disponibles del clan$/, function () {
  return 'pending';
});

Then(/^no se muestra la opción para crear misión de clan$/, function () {
  return 'pending';
});

// 3) Miembro estándar intenta crear misión por un atajo
When(/^el usuario intenta crear una misión de clan forzando la acción$/, function () {
  return 'pending';
});

Then(/^la acción de crear misión de clan es rechazada$/, function () {
  return 'pending';
});

Then(/^se muestra un mensaje indicando falta de permisos$/, function () {
  return 'pending';
});

// 4) Líder expulsa a un miembro
Given(/^existe otro miembro en el clan$/, function () {
  return 'pending';
});

When(/^el usuario intenta expulsar al otro miembro$/, function () {
  return 'pending';
});

Then(/^la acción de expulsar miembro es permitida$/, function () {
  return 'pending';
});

Then(/^el miembro deja de pertenecer al clan$/, function () {
  return 'pending';
});

// 5) Miembro estándar no puede expulsar miembros
Then(/^la acción de expulsar miembro es rechazada$/, function () {
  return 'pending';
});

// 6) Miembro estándar completa misión de clan
Given(/^existe una misión de clan asignada al usuario$/, function () {
  return 'pending';
});

When(/^el usuario marca la misión como completada$/, function () {
  return 'pending';
});

Then(/^la misión de clan se marca como completada para ese usuario$/, function () {
  return 'pending';
});

// 7) Cambio de rol actualiza opciones
Given(/^el usuario es promovido a "([^"]*)"$/, function (nuevoRol) {
  return 'pending';
});

When(/^el usuario vuelve a visualizar las acciones disponibles del clan$/, function () {
  return 'pending';
});

Then(/^ahora se muestra la opción para crear misión de clan$/, function () {
  return 'pending';
});

Then(/^se muestran las opciones administrativas correspondientes$/, function () {
  return 'pending';
});

// 8) Siempre debe existir al menos un líder
Given(/^es el único líder del clan$/, function () {
  return 'pending';
});

When(/^el usuario intenta abandonar el clan$/, function () {
  return 'pending';
});

Then(/^la acción de abandonar el clan es rechazada$/, function () {
  return 'pending';
});

Then(/^se muestra un mensaje indicando que debe asignar un nuevo líder primero$/, function () {
  return 'pending';
});
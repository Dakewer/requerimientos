const { Given, When, Then, Before } = require('@cucumber/cucumber');

Before(function () {
  return 'pending';
});


Given(/^la app está abierta$/, function () {
  return 'pending';
});

Given(/^el usuario tiene sesión iniciada$/, function () {
  return 'pending';
});

Given(/^el usuario se encuentra en la pantalla Home$/, function () {
  return 'pending';
});

Given(/^existe una misión asociada a un clan$/, function () {
  return 'pending';
});


Given(/^el usuario pertenece al menos a un clan$/, function () {
  return 'pending';
});


// 1) Tarea de clan con etiqueta e ícono
Given(/^existe una misión asociada al clan "([^"]*)"$/, function (clanName) {
  return 'pending';
});

When(/^se cargan las tareas en Home$/, function () {
  return 'pending';
});

Then(/^la misión de clan muestra la etiqueta "Clan"$/, function () {
  return 'pending';
});

Then(/^la misión de clan muestra el ícono del clan "([^"]*)"$/, function (clanName) {
  return 'pending';
});

// 2) Tarea personal sin identificación de clan
Given(/^existe una misión personal no asociada a ningún clan$/, function () {
  return 'pending';
});

Then(/^la misión personal no muestra la etiqueta "Clan"$/, function () {
  return 'pending';
});

Then(/^la misión personal no muestra ícono de clan$/, function () {
  return 'pending';
});

// 3) Varias tareas de distintos clanes
Then(/^la misión del clan "([^"]*)" muestra el ícono del clan "([^"]*)"$/, function (clanName1, clanName2) {
  return 'pending';
});

// 4) Modo oscuro y modo claro
Given(/^la misión de clan se muestra en Home$/, function () {
  return 'pending';
});

When(/^el usuario activa el modo oscuro$/, function () {
  return 'pending';
});

Then(/^la etiqueta "Clan" sigue siendo legible$/, function () {
  return 'pending';
});

Then(/^el ícono del clan se muestra correctamente$/, function () {
  return 'pending';
});

When(/^el usuario vuelve al modo claro$/, function () {
  return 'pending';
});

// 5) Ícono de clan no disponible
Given(/^el ícono del clan no está disponible o es inválido$/, function () {
  return 'pending';
});

Then(/^la misión de clan no muestra ningún ícono roto$/, function () {
  return 'pending';
});

Then(/^la UI no se descompone por falta de ícono$/, function () {
  return 'pending';
});

// 6) Sin tareas de clan
Given(/^el usuario solo tiene tareas personales$/, function () {
  return 'pending';
});

Then(/^ninguna tarea muestra la etiqueta "Clan"$/, function () {
  return 'pending';
});

Then(/^ninguna tarea muestra ícono de clan$/, function () {
  return 'pending';
});

// 7) Error al aplicar estilo de clan
Given(/^ocurre un error al aplicar el estilo visual de clan$/, function () {
  return 'pending';
});

Then(/^la misión se muestra como tarea personal sin etiqueta ni ícono$/, function () {
  return 'pending';
});

Then(/^la lista de tareas sigue mostrándose correctamente$/, function () {
  return 'pending';
});
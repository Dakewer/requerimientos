 const { Given } = require('@cucumber/cucumber');

// Compartido por varios features para evitar ambigüedad
Given(/^no hay conexión a internet$/, function () {
  return 'pending';
});
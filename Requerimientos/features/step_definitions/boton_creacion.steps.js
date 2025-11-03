const { Given, When, Then, Before } = require('@cucumber/cucumber');

Before(function () {
  return 'pending';
});

Given(/^la app está abierta y el usuario se encuentra en Home$/, function () { return 'pending'; });
Given(/^el botón “\+ Crear misión” es visible y accesible$/, function () { return 'pending'; });

When(/^el usuario pulsa el botón “\+”$/, function () { return 'pending'; });
Then(/^se muestra un popup\/modal de creación$/, function () { return 'pending'; });
Then(/^el popup contiene los campos: Título, Fecha\/Hora, Dificultad y Etiqueta principal$/, function () { return 'pending'; });

Given(/^el popup de creación está abierto$/, function () { return 'pending'; });
Given(/^el usuario completa todos los campos obligatorios con valores válidos$/, function () { return 'pending'; });
When(/^el usuario confirma el guardado$/, function () { return 'pending'; });
Then(/^se crea la misión y se muestra un mensaje de confirmación$/, function () { return 'pending'; });
Then(/^la misión aparece en Home$/, function () { return 'pending'; });
Then(/^se crea la entrada correspondiente en el Calendario$/, function () { return 'pending'; });
Then(/^se genera un recordatorio en la agenda local del dispositivo$/, function () { return 'pending'; });

Given(/^el campo Título está vacío$/, function () { return 'pending'; });
When(/^el usuario intenta guardar$/, function () { return 'pending'; });
Then(/^se muestra el error “Campo obligatorio”$/, function () { return 'pending'; });
Then(/^la misión no se guarda$/, function () { return 'pending'; });

Given(/^el usuario introduce una Fecha\/Hora en el pasado$/, function () { return 'pending'; });
Then(/^se muestra el error “La fecha debe ser actual o futura”$/, function () { return 'pending'; });

Given(/^el usuario selecciona dificultad (\d+)$/, function (d) { return 'pending'; });
Given(/^el usuario establece una duración de (\d+) horas?$/, function (h) { return 'pending'; });
When(/^el sistema valida el formulario$/, function () { return 'pending'; });
Then(/^el sistema calcula la XP de acuerdo a la regla definida \(por ejemplo, 50 XP\)$/, function () { return 'pending'; });

// ——— Nuevos (faltantes) ———
Given(/^el popup de creación está abierto con datos válidos$/, function () {
  return 'pending';
});

Given(/^el popup de creación está abierto y hay datos capturados$/, function () {
  return 'pending';
});

Then(/^no se guarda ningún dato parcial$/, function () {
  return 'pending';
});

// Guardado offline
Then(/^la misión se guarda localmente$/, function () { return 'pending'; });
Then(/^la misión queda marcada como “pendiente de sincronización”$/, function () { return 'pending'; });
Then(/^la misión aparece en Home con estado de pendiente$/, function () { return 'pending'; });

// Cancelación y error
When(/^el usuario cancela la creación$/, function () { return 'pending'; });
Then(/^no se genera evento en el Calendario$/, function () { return 'pending'; });
Then(/^no se guarda ninguna información parcial$/, function () { return 'pending'; });
Given(/^ocurre un error de sistema durante el guardado$/, function () { return 'pending'; });
When(/^el proceso de guardado se aborta$/, function () { return 'pending'; });
Then(/^se informa al usuario que ocurrió un error$/, function () { return 'pending'; });
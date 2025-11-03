const { Given, When, Then, Before } = require('@cucumber/cucumber');

Before(function () {
  return 'pending';
});

Given(/^la app está abierta en la pantalla de inicio de sesión$/, function () { return 'pending'; });
Given(/^se muestran las opciones “Continuar con Google” y “Continuar con Apple”$/, function () { return 'pending'; });

When(/^el usuario elige “Continuar con Google” e introduce credenciales válidas$/, function () { return 'pending'; });
Then(/^el acceso es exitoso$/, function () { return 'pending'; });
Then(/^el usuario vuelve al Home$/, function () { return 'pending'; });
Then(/^no se crea un registro nuevo en la BD$/, function () { return 'pending'; });

When(/^el usuario selecciona “Continuar con Apple” e inicia sesión por primera vez$/, function () { return 'pending'; });
Then(/^se crea un nuevo usuario en la BD con los datos del proveedor$/, function () { return 'pending'; });
Then(/^se muestra un mensaje de bienvenida$/, function () { return 'pending'; });
Then(/^el usuario es redirigido al Home$/, function () { return 'pending'; });

Given(/^existe en la BD una cuenta vinculada a un UID de Google$/, function () { return 'pending'; });
When(/^el usuario inicia sesión nuevamente con “Continuar con Google”$/, function () { return 'pending'; });
Then(/^el sistema reconoce el ID externo$/, function () { return 'pending'; });
Then(/^permite el acceso sin duplicar el registro en la BD$/, function () { return 'pending'; });

When(/^el usuario cancela la ventana de autenticación del proveedor$/, function () { return 'pending'; });
Then(/^regresa a la pantalla de inicio de sesión$/, function () { return 'pending'; });
Then(/^no se crea ni modifica ningún registro en la BD$/, function () { return 'pending'; });

When(/^el proveedor devuelve un token inválido o expirado$/, function () { return 'pending'; });
Then(/^se muestra el mensaje “Token inválido, inténtalo de nuevo”$/, function () { return 'pending'; });
Then(/^no se guarda información parcial en la BD$/, function () { return 'pending'; });

// (OJO) No definimos aquí "no hay conexión a internet" para evitar ambigüedad; lo toma del archivo común.
When(/^el usuario intenta autenticarse con Google o Apple$/, function () { return 'pending'; });
Then(/^se muestra el error “No se pudo conectar con el proveedor”$/, function () { return 'pending'; });

When(/^el sistema recibe un token válido del proveedor$/, function () { return 'pending'; });
Then(/^se genera un JWT interno y se establece una sesión persistente$/, function () { return 'pending'; });
Then(/^la sesión permanece activa al volver a abrir la app$/, function () { return 'pending'; });

When(/^el inicio de sesión concluye correctamente$/, function () { return 'pending'; });
Then(/^el sistema registra en el log\/BD el proveedor utilizado y el UID asociado$/, function () { return 'pending'; });
Then(/^la información queda disponible para auditoría$/, function () { return 'pending'; });
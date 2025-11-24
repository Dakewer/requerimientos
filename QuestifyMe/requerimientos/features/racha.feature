# features/racha_acceso_consecutivo.feature

Feature: Racha de acceso consecutivo
  Como usuario de QuestifyMe
  Quiero que mi racha de acceso se mantenga y sea visible
  Para recibir recompensas diarias por mi constancia

  Scenario: Usuario accede con una cuenta ya registrada
    Given que tengo una cuenta registrada y verificada
    And mi última sesión fue ayer
    And mi racha actual es de 5 días
    When inicio sesión en la aplicación
    Then mi racha debería incrementarse a 6 días
    And debería recibir la recompensa del día 6

  Scenario: Usuario accede con una cuenta sin registrar
    Given que no tengo una cuenta registrada
    And intento acceder a la aplicación
    When inicio sesión con credenciales inválidas
    Then no debería registrarse ningún acceso en racha
    And debería ver un mensaje de error de autenticación

  Scenario: La cuenta ya tiene un personaje creado
    Given que tengo una cuenta registrada y activa
    And mi personaje está creado y configurado
    And mi última sesión fue hoy más temprano
    When inicio sesión en la aplicación
    Then no debería incrementar mi racha
    And debería ver mi racha actual mantenerse

  Scenario: No existe un personaje creado en la cuenta
    Given que tengo una cuenta registrada y activa
    And no he creado mi personaje aún
    And es mi primer acceso del día
    When inicio sesión en la aplicación
    Then no debería procesarse la racha de acceso
    And debería ser redirigido a la creación de personaje

  Scenario: Se accede desde un dispositivo que no ha alterado la fecha
    Given que tengo una cuenta registrada y activa
    And la fecha del dispositivo es correcta
    And el servicio de verificación de fechas está operativo
    When inicio sesión en la aplicación
    Then la racha debería calcularse correctamente
    And debería usar la fecha del servidor como referencia

  Scenario: El dispositivo desde el que se accede modificó la fecha
    Given que tengo una cuenta registrada y activa
    And la fecha del dispositivo está alterada
    And el servicio de verificación de fechas está operativo
    When inicio sesión en la aplicación
    Then la racha debería calcularse con la fecha del servidor
    And no debería verse afectada por la fecha incorrecta del dispositivo

  Scenario: El dispositivo si le ha dado permiso a la aplicación
    Given que tengo una cuenta registrada y activa
    And la aplicación tiene permisos necesarios
    And los servicios del sistema están disponibles
    When inicio sesión en la aplicación
    Then debería poder registrar mi acceso correctamente
    And la racha debería actualizarse en el servidor

  Scenario: El dispositivo no le dió permisos a la aplicación
    Given que tengo una cuenta registrada y activa
    And la aplicación no tiene permisos necesarios
    And intento acceder a funcionalidades restringidas
    When inicio sesión en la aplicación
    Then debería ver un mensaje solicitando permisos
    And la racha no debería procesarse hasta otorgar permisos
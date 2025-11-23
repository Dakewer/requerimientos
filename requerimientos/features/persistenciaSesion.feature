Feature: Presencia y Mantenimiento de la Sesión

  Como usuario de la aplicación,
  Quiero que mi sesión se mantenga activa automáticamente si el token es válido y poder cerrarla manualmente,
  Para tener un acceso rápido a la aplicación y controlar mi seguridad.

  @ReanudacionAutomatica
  Scenario: Reanudación automática exitosa con token válido
    Given que el usuario inicia la aplicación
    And que el token de sesión almacenado es válido
    When el sistema verifica el estado de la sesión
    Then el usuario es llevado a la pantalla de "Home" sin necesidad de loguearse

  @TokenCaducado
  Scenario: Redirección por token de sesión caducado
    Given que el usuario inicia la aplicación
    And que el token de sesión almacenado ha caducado
    When el sistema verifica el estado de la sesión
    Then el usuario es redirigido a la pantalla de "Login/Registro"
    And se muestra un mensaje indicando que "La sesión ha expirado"

  @CierreManual
  Scenario: Cierre de sesión manual exitoso
    Given que el usuario está logueado en la aplicación
    When el usuario selecciona "Cerrar Sesión" en el menú de configuración
    Then el token de sesión es eliminado del almacenamiento
    And el usuario es redirigido a la pantalla de "Login/Registro"
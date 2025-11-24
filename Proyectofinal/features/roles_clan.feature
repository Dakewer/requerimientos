Feature: Roles de clan y permisos
  El sistema debe soportar roles de clan (Líder y Miembro Estándar) con permisos distintos.
  El Líder puede administrar el clan y crear misiones.
  El Miembro Estándar puede ver y completar misiones, pero no administrar.

  Background:
    Given la app está abierta
    And el usuario tiene sesión iniciada
    And el usuario pertenece a un clan válido

  # 1) Líder crea misión de clan
  Scenario: Líder puede crear misión de clan
    Given el usuario tiene rol "Líder" en el clan
    When el usuario intenta crear una misión de clan
    Then la acción de crear misión de clan es permitida
    And la misión de clan se registra correctamente

  # 2) Miembro estándar no ve opción de crear misión
  Scenario: Miembro estándar no ve la opción de crear misión
    Given el usuario tiene rol "Miembro Estándar" en el clan
    When el usuario visualiza las acciones disponibles del clan
    Then no se muestra la opción para crear misión de clan

  # 3) Miembro estándar no puede crear misión aunque lo intente
  Scenario: Miembro estándar intenta crear misión por un atajo
    Given el usuario tiene rol "Miembro Estándar" en el clan
    When el usuario intenta crear una misión de clan forzando la acción
    Then la acción de crear misión de clan es rechazada
    And se muestra un mensaje indicando falta de permisos

  # 4) Líder expulsa a un miembro
  Scenario: Líder puede expulsar miembro del clan
    Given el usuario tiene rol "Líder" en el clan
    And existe otro miembro en el clan
    When el usuario intenta expulsar al otro miembro
    Then la acción de expulsar miembro es permitida
    And el miembro deja de pertenecer al clan

  # 5) Miembro estándar no puede expulsar miembros
  Scenario: Miembro estándar no puede expulsar miembro del clan
    Given el usuario tiene rol "Miembro Estándar" en el clan
    And existe otro miembro en el clan
    When el usuario intenta expulsar al otro miembro
    Then la acción de expulsar miembro es rechazada
    And se muestra un mensaje indicando falta de permisos

  # 6) Miembro estándar completa misión de clan
  Scenario: Miembro estándar puede completar misión de clan
    Given el usuario tiene rol "Miembro Estándar" en el clan
    And existe una misión de clan asignada al usuario
    When el usuario marca la misión como completada
    Then la misión de clan se marca como completada para ese usuario

  # 7) Cambio de rol actualiza opciones
  Scenario: Cambio de rol de miembro a líder actualiza opciones
    Given el usuario tiene rol "Miembro Estándar" en el clan
    And el usuario es promovido a "Líder"
    When el usuario vuelve a visualizar las acciones disponibles del clan
    Then ahora se muestra la opción para crear misión de clan
    And se muestran las opciones administrativas correspondientes

  # 8) Siempre debe existir al menos un líder
  Scenario: El último líder no puede dejar el clan sin reemplazo
    Given el usuario tiene rol "Líder" en el clan
    And es el único líder del clan
    When el usuario intenta abandonar el clan
    Then la acción de abandonar el clan es rechazada
    And se muestra un mensaje indicando que debe asignar un nuevo líder primero
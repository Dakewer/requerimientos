Feature: Identificación visual de tareas de clan
  Las tareas de clan deben mostrarse claramente identificadas en Home.
  Las tareas personales no deben mostrar etiqueta ni ícono de clan.
  Si falla algo en el estilo, la tarea se muestra como normal sin romper la UI.

  Background:
    Given la app está abierta
    And el usuario tiene sesión iniciada
    And el usuario pertenece al menos a un clan
    And el usuario se encuentra en la pantalla Home

  # 1) Tarea de clan con etiqueta e ícono
  Scenario: Mostrar etiqueta e ícono en una tarea de clan
    Given existe una misión asociada al clan "Night Wolves"
    When se cargan las tareas en Home
    Then la misión de clan muestra la etiqueta "Clan"
    And la misión de clan muestra el ícono del clan "Night Wolves"

  # 2) Tarea personal sin identificación de clan
  Scenario: Mostrar tarea personal sin etiqueta ni ícono
    Given existe una misión personal no asociada a ningún clan
    When se cargan las tareas en Home
    Then la misión personal no muestra la etiqueta "Clan"
    And la misión personal no muestra ícono de clan

  # 3) Varias tareas de distintos clanes
  Scenario: Mostrar iconos correctos para tareas de distintos clanes
    Given existe una misión asociada al clan "Night Wolves"
    And existe una misión asociada al clan "Sun Riders"
    When se cargan las tareas en Home
    Then la misión del clan "Night Wolves" muestra el ícono del clan "Night Wolves"
    And la misión del clan "Sun Riders" muestra el ícono del clan "Sun Riders"

  # 4) Modo oscuro y modo claro
  Scenario: Mantener la identificación de clan en modo oscuro y claro
    Given existe una misión asociada a un clan
    And la misión de clan se muestra en Home
    When el usuario activa el modo oscuro
    Then la etiqueta "Clan" sigue siendo legible
    And el ícono del clan se muestra correctamente
    When el usuario vuelve al modo claro
    Then la etiqueta "Clan" sigue siendo legible
    And el ícono del clan se muestra correctamente

  # 5) Ícono de clan no disponible
  Scenario: Mostrar solo etiqueta cuando el ícono no está disponible
    Given existe una misión asociada a un clan
    And el ícono del clan no está disponible o es inválido
    When se cargan las tareas en Home
    Then la misión de clan muestra la etiqueta "Clan"
    And la misión de clan no muestra ningún ícono roto
    And la UI no se descompone por falta de ícono

  # 6) Sin tareas de clan
  Scenario: Home sin tareas de clan
    Given el usuario solo tiene tareas personales
    When se cargan las tareas en Home
    Then ninguna tarea muestra la etiqueta "Clan"
    And ninguna tarea muestra ícono de clan

  # 7) Error al aplicar estilo de clan
  Scenario: Falla el estilo de clan y la tarea se muestra como normal
    Given existe una misión asociada a un clan
    And ocurre un error al aplicar el estilo visual de clan
    When se cargan las tareas en Home
    Then la misión se muestra como tarea personal sin etiqueta ni ícono
    And la lista de tareas sigue mostrándose correctamente
Feature: Botón de Creación
  El usuario tendrá un botón para crear misiones/eventos. Al pulsarlo se abre un
  popup con campos mínimos (Título, Fecha/Hora, Dificultad, Etiqueta principal).
  Los campos obligatorios se validan antes de guardar. La XP se calcula en función
  de la dificultad y duración. Al confirmar, el evento aparece en Home y en el
  Calendario. Si no hay conexión, se guarda localmente como pendiente de sincronizar.
  Si hay error o cancelación, no se guarda información parcial.

  Background:
    Given la app está abierta y el usuario se encuentra en Home
    And el botón “+ Crear misión” es visible y accesible

  # 1) Popup al pulsar el botón
  Scenario: Mostrar popup de creación
    When el usuario pulsa el botón “+”
    Then se muestra un popup/modal de creación
    And el popup contiene los campos: Título, Fecha/Hora, Dificultad y Etiqueta principal

  # 2) Creación exitosa con confirmación
  Scenario: Crear misión con datos válidos
    Given el popup de creación está abierto
    And el usuario completa todos los campos obligatorios con valores válidos
    When el usuario confirma el guardado
    Then se crea la misión y se muestra un mensaje de confirmación
    And la misión aparece en Home
    And se crea la entrada correspondiente en el Calendario
    And se genera un recordatorio en la agenda local del dispositivo

  # 3) Validación de obligatorio: Título vacío
  Scenario: Impedir guardado cuando Título está vacío
    Given el popup de creación está abierto
    And el campo Título está vacío
    When el usuario intenta guardar
    Then se muestra el error “Campo obligatorio”
    And la misión no se guarda

  # 4) Validación de Fecha/Hora: no permitir fechas pasadas
  Scenario: Impedir guardado con fecha pasada
    Given el popup de creación está abierto
    And el usuario introduce una Fecha/Hora en el pasado
    When el usuario intenta guardar
    Then se muestra el error “La fecha debe ser actual o futura”
    And la misión no se guarda

  # 5) Cálculo de XP por dificultad y duración
  Scenario: Calcular XP según dificultad y duración
    Given el popup de creación está abierto
    And el usuario selecciona dificultad 3
    And el usuario establece una duración de 2 horas
    When el sistema valida el formulario
    Then el sistema calcula la XP de acuerdo a la regla definida (por ejemplo, 50 XP)

  # 6) Guardado sin conexión: pendiente de sincronización
  Scenario: Guardar misión sin conexión
    Given no hay conexión a internet
    And el popup de creación está abierto con datos válidos
    When el usuario confirma el guardado
    Then la misión se guarda localmente
    And la misión queda marcada como “pendiente de sincronización”
    And la misión aparece en Home con estado de pendiente

  # 7) Cancelación por el usuario
  Scenario: Cancelar creación antes de guardar
    Given el popup de creación está abierto y hay datos capturados
    When el usuario cancela la creación
    Then no se genera evento en el Calendario
    And no se guarda ninguna información parcial

  # 8) Error durante el guardado
  Scenario: Fallo al guardar por error del sistema
    Given el popup de creación está abierto con datos válidos
    And ocurre un error de sistema durante el guardado
    When el proceso de guardado se aborta
    Then no se guarda ningún dato parcial
    And se informa al usuario que ocurrió un error
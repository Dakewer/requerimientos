Feature: Creación de Misiones Personalizadas
  Como usuario de QuestifyMe
  Quiero poder crear misiones con diferentes configuraciones
  Para gamificar mis tareas diarias y hacerlas más engaging

  Scenario: Usuario crea una misión con título
    Given que estoy en la pantalla de creación de misiones
    When ingreso "Estudiar para examen de matemáticas" en el campo título
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And debería ver la misión en mi lista con el título "Estudiar para examen de matemáticas"

  Scenario: Usuario no pone ningún título en la misión
    Given que estoy en la pantalla de creación de misiones
    When dejo el campo título vacío
    And presiono el botón "Guardar Misión"
    Then debería ver el mensaje de error "El título es obligatorio"
    And la misión no debería crearse

  Scenario: Usuario fija un objetivo específico para la misión
    Given que estoy en la pantalla de creación de misiones
    When ingreso "Completar capítulos 5-8 de álgebra" en el campo objetivo
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And debería ver el objetivo "Completar capítulos 5-8 de álgebra" en los detalles de la misión

  Scenario: Usuario no escribe ningún objetivo
    Given que estoy en la pantalla de creación de misiones
    When dejo el campo objetivo vacío
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And el campo objetivo debería mostrarse como "Sin objetivo específico"

  Scenario: Usuario selecciona un atributo a mejorar
    Given que estoy en la pantalla de creación de misiones
    When selecciono "Inteligencia" en la lista de atributos
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And debería ver el icono de "Inteligencia" asociado a la misión

  Scenario: Usuario no selecciona ningún atributo a mejorar
    Given que estoy en la pantalla de creación de misiones
    When no selecciono ningún atributo de la lista
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And el sistema debería asignar automáticamente "Inteligencia" como atributo por defecto

  Scenario: Misión se crea con 1 día de anticipación
    Given que estoy en la pantalla de creación de misiones
    When establezco la fecha para mañana a las 14:00
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And debería ver la misión programada para mañana en mi calendario
    And el sistema debería calcular una recompensa de XP estándar

  Scenario: Misión se crea con 30 minutos de anticipación
    Given que estoy en la pantalla de creación de misiones
    When establezco la fecha para dentro de 30 minutos
    And presiono el botón "Guardar Misión"
    Then la misión debería crearse exitosamente
    And debería ver un indicador de "Misión Urgente" en la lista
    And el sistema debería calcular una recompensa de XP con bonificación por urgencia

  Scenario: Misión se crea para la semana pasada
    Given que estoy en la pantalla de creación de misiones
    When establezco una fecha que ya pasó
    And presiono el botón "Guardar Misión"
    Then debería ver el mensaje de error "No puedes crear misiones en el pasado"
    And la misión no debería crearse


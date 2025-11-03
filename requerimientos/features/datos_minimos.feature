Feature: Modelo de Datos Mínimo para Tareas

  Como usuario, quiero crear una tarea con todos los campos
  esenciales para asegurar que se guarde correctamente y
  sea visible en mi planificación.

  Scenario: Creación de tarea exitosa con todos los campos mínimos
    Given en el que estoy en la pantalla de "Crear Tarea"
    When en el ingreso el Título "Revisar tutorial de Cucumber"
    And en el que ingreso la "Fecha y hora de entrega" "03/11/2025 10:00"
    And en el que selecciono la "Dificultad" "3"
    And en el que selecciono la "Etiqueta principal" "Universidad"
    And en el que selecciono la "Estadística a afectar" "Productividad"
    And en el que presiono el botón "Guardar Tarea"
    Then en el que el sistema debe confirmar la "tarea creada exitosamente"
    And en el que la tarea "Revisar tutorial de Cucumber" debe aparecer en mi "Home"
    And en el que la tarea "Revisar tutorial de Cucumber" debe aparecer en el "Calendario"
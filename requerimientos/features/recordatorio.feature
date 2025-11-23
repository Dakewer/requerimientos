Feature: Notificaciones y Recordatorios Generales

  Como usuario,
  Quiero recibir notificaciones oportunas para tareas pendientes y alertas de inactividad,
  Para mantenerme activo y completar mis objetivos.

  @RecordatorioTarea
  Scenario: Disparo de notificación de recordatorio de tarea programada
    Given que existe una tarea con recordatorio en 5 minutos
    And que el usuario tiene las notificaciones activas
    When se activa el tiempo del recordatorio
    Then se dispara una notificación Pop-up en el que se muestra el mensaje de la tarea
    And se registra la notificación en el historial interno con el estado "Enviada"

  @AlertaInactividad
  Scenario: Disparo de alerta por inactividad prolongada
    Given que el usuario no ha completado tareas por más de 72 horas
    And que las notificaciones de inactividad están habilitadas
    When el sistema ejecuta la verificación de inactividad
    Then se dispara una notificación interna en el que se muestra el mensaje "¡Te extrañamos! Vuelve a tu aventura."
    And se registra la notificación en el historial interno con el estado "Enviada"

  @Excepcion
  Scenario: Notificación bloqueada por ajustes del sistema operativo
    Given que existe una tarea con recordatorio en 5 minutos
    And que el usuario tiene las notificaciones desactivadas en el sistema operativo
    When se activa el tiempo del recordatorio
    Then no se dispara ninguna notificación Pop-up del sistema operativo
    And se registra la notificación en el historial interno con el estado "Bloqueada"
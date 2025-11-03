Feature: Notificaciones Locales

  Como usuario, quiero que el sistema me envíe recordatorios locales
  sobre mis tareas, incluso sin internet o con la app cerrada,
  para no olvidar mis pendientes.

  Background:
    Given en el que el usuario tiene permisos de notificación activados
    And en el que existe una tarea "Comprar leche" con fecha de entrega "Mañana 10:00"

  @offline
  Scenario: La notificación aparece sin conexión a internet
    Given en el que el dispositivo está "sin conexión a internet"
    And en el que el usuario ha programado un recordatorio para la tarea "Comprar leche"
    When en el que llega la hora del recordatorio "Mañana 10:00"
    Then en el que el sistema debe mostrar una notificación local con el texto "Comprar leche"

  @crud
  Scenario: La notificación no aparece si la tarea fue eliminada
    Given en el que el usuario ha programado un recordatorio para la tarea "Comprar leche"
    When en el que el usuario elimina la tarea "Comprar leche"
    And en el que llega la hora del recordatorio "Mañana 10:00"
    Then en el que el sistema no debe mostrar ninguna notificación

  @crud
  Scenario: La notificación se reprograma al editar la fecha de la tarea
    Given en el que el usuario ha programado un recordatorio para "Mañana 10:00"
    When en el que el usuario edita la fecha de entrega de la tarea "Comprar leche" a "Mañana 14:00"
    Then en el que el sistema debe cancelar el recordatorio de las "10:00"
    And en el que el sistema debe programar un nuevo recordatorio para las "14:00"

  @permissions
  Scenario: La notificación no se agenda si el usuario deniega permisos
    Given en el que el usuario no tiene permisos de notificación activados
    When en el que el usuario intenta programar un recordatorio para la tarea "Comprar leche"
    Then en el que el sistema debe solicitar permisos de notificación
    And en el que el usuario "deniega" los permisos
    Then en el que el sistema no debe agendar ninguna notificación

  @multiple
  Scenario: El usuario puede configurar múltiples recordatorios por tarea
    Given en el que el usuario está en la pantalla de "Editar Tarea" para "Comprar leche"
    When en el que el usuario añade un recordatorio "1 hora antes"
    And en el que el usuario añade otro recordatorio "10 minutos antes"
    And en el que el usuario guarda la tarea
    Then en el que el sistema debe programar "2" notificaciones para la tarea "Comprar leche" 
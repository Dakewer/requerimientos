# features/asignacion_xp_multiple.feature

Feature: Asignación de XP Múltiple
  Como usuario de QuestifyMe
  Quiero que mis tareas asignen XP a múltiples estadísticas
  Para desarrollar mi personaje de manera más equilibrada

  Scenario: Usuario marca una tarea con solo 1 característica
    Given que tengo una tarea activa con estadística principal "Inteligencia"
    And la tarea no tiene estadística secundaria configurada
    And la tarea otorga 100 XP base al completarse
    When marco la tarea como completada
    Then la estadística "Inteligencia" debería recibir 100 XP
    And ninguna otra estadística debería recibir XP

  Scenario: Usuario no marca una tarea
    Given que tengo una tarea activa con estadística principal "Fuerza"
    And la tarea tiene estadística secundaria "Constitución" configurada
    And la tarea otorga 100 XP base al completarse
    When no realizo ninguna acción sobre la tarea
    Then ninguna estadística debería recibir XP
    And la tarea debería permanecer en estado activo

  Scenario: Usuario marca una tarea con 2 características
    Given que tengo una tarea activa con estadística principal "Sabiduría"
    And la tarea tiene estadística secundaria "Carisma" configurada
    And la tarea otorga 100 XP base al completarse
    When marco la tarea como completada
    Then la estadística "Sabiduría" debería recibir 100 XP
    And la estadística "Carisma" debería recibir 30 XP

  Scenario: Usuario marca una tarea con característica secundaria no configurada
    Given que tengo una tarea activa con estadística principal "Destreza"
    And la tarea tiene estadística secundaria configurada pero inválida
    And la tarea otorga 100 XP base al completarse
    When marco la tarea como completada
    Then la estadística "Destreza" debería recibir 100 XP
    And el sistema debería ignorar la estadística secundaria inválida
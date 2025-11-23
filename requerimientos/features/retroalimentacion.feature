Feature: Retroalimentación Visual y Recompensas
  Para mantener la motivación y el engagement del usuario
  Como usuario de la aplicación
  Quiero recibir retroalimentación visual y auditiva inmediata por mis acciones relevantes

  @Nivel @HappyPath
  Scenario: R1 - Subida de Nivel (Hito) con Animaciones Activadas
    Given que el Sistema de Gamificación ha calculado que la XP acumulada es suficiente para subir al siguiente nivel
    And que la configuración de Animaciones y Efectos Visuales está activa
    When el usuario presiona el botón "Marcar como Terminada"
    Then el sistema debe mostrar una animación de destello en pantalla
    And se debe reproducir un sonido de logro
    And el pop-up "¡Nivel X Alcanzado!" debe ser visible
    And el estado visual del nivel del personaje se actualiza inmediatamente

  @MicroEvento @Confeti
  Scenario: Finalización de Tarea (Micro-Evento)
    Given que el usuario tiene la tarea "Enviar Reporte" pendiente
    And que la configuración de Animaciones y Efectos Visuales está activa
    When el usuario pulsa el botón de "Terminar Tarea"
    Then se debe reproducir una animación de confeti en el área de la tarea
    And se debe reproducir un sonido de confirmación leve
    And el estado de la tarea en la interfaz debe cambiar a 'Completada'

  @Interaccion @Avatar
  Scenario: Interacción Lúdica con el Avatar
    Given que el usuario está en la pantalla principal (Home)
    When el usuario toca al Avatar de su personaje
    Then el Avatar debe ejecutar una animación lúdica de reacción
    And el sistema debe reproducir un sonido lúdico tipo Tamagotchi

  @ID-10 @Excepcion @Fallback
  Scenario: Subida de Nivel con Animaciones Desactivadas
    Given que el Sistema de Gamificación ha calculado que el personaje subirá de nivel
    And que la configuración de Animaciones y Efectos Visuales está desactivada
    When el usuario completa la acción que dispara la subida de nivel
    Then el pop-up "¡Nivel X Alcanzado!" debe ser visible
    And se debe reproducir un sonido de confirmación básico
    And el estado visual del nivel del personaje se actualiza inmediatamente
    And no se debe reproducir la animación de destello en pantalla
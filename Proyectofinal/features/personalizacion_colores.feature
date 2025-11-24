Feature: Personalización de Colores de Interfaz
  El usuario debe poder cambiar la paleta de colores de la interfaz desde Ajustes.
  Al seleccionar una paleta, se debe mostrar una vista previa temporal.
  El usuario debe confirmar para aplicar la paleta. Si cancela, no se guarda nada.
  La paleta seleccionada debe persistir localmente y sincronizarse cuando aplique.
  Si ocurre un error o falta de conexión, se maneja sin afectar la paleta actual.

  Background:
    Given la app está abierta
    And el usuario se encuentra en Ajustes → Apariencia

  # 1) Mostrar paletas disponibles
  Scenario: Mostrar lista de paletas disponibles
    When el usuario abre la sección de paletas de color
    Then se muestran todas las paletas disponibles
    And se muestran las paletas personalizadas del usuario si existen

  # 2) Vista previa inmediata
  Scenario: Mostrar vista previa al seleccionar una paleta
    Given la lista de paletas está visible
    When el usuario selecciona la paleta "Bosque"
    Then la interfaz muestra una vista previa con los colores de la paleta seleccionada
    And la paleta previa del usuario no se reemplaza todavía

  # 3) Aplicar paleta correctamente
  Scenario: Aplicar paleta después de confirmación
    Given el usuario ha seleccionado la paleta "Oscuro"
    And la vista previa está activa
    When el usuario confirma el cambio
    Then la paleta "Oscuro" se convierte en la paleta activa de la aplicación
    And la interfaz refleja la nueva paleta en todas las vistas
    And la preferencia de paleta se guarda localmente
    And la preferencia se sincroniza con la nube si el usuario tiene sesión activa

  # 4) Cancelar el cambio de paleta
  Scenario: Cancelar la selección antes de confirmar
    Given el usuario tiene activa la paleta "Clásico"
    And el usuario selecciona la paleta "Bosque" en modo de vista previa
    When el usuario cancela el cambio
    Then la paleta actual permanece como "Clásico"
    And no se guarda ninguna preferencia nueva
    And no se registra vista previa como paleta activa

  # 5) Paleta persistente al reiniciar
  Scenario: Mantener la paleta después de cerrar y abrir la app
    Given la paleta activa es "Oscuro"
    When el usuario reinicia la app
    Then la paleta "Oscuro" aparece aplicada al iniciar
    And la UI usa los colores configurados sin requerir reconfiguración

  # 6) Accesibilidad y contraste
  Scenario: Validar contraste y accesibilidad de la paleta
    Given la paleta "Noche Retro" tiene contraste bajo
    When el usuario intenta aplicarla
    Then el sistema ajusta los colores o bloquea la selección
    And se muestra el mensaje “La paleta no cumple con los estándares de accesibilidad”

  # 7) Guardado sin conexión
  Scenario: Aplicar paleta sin conexión a internet
    Given no hay conexión a internet
    And el usuario selecciona la paleta "Bosque"
    When el usuario confirma el cambio
    Then la paleta se guarda localmente
    And la paleta se marca como “pendiente de sincronización”
    And la paleta se aplica de inmediato en la interfaz

  # 8) Error durante el guardado
  Scenario: Error al aplicar o guardar la paleta
    Given el usuario selecciona la paleta "Oscuro"
    And ocurre un error de sistema durante el guardado
    When el proceso de guardado se aborta
    Then la paleta anterior se mantiene activa
    And no se guarda ningún dato parcial
    And se informa al usuario que ocurrió un error
# Característica: Crear Personaje
# Como un usuario
# Quiero poder crear un personaje siguiendo los pasos de configuración
# Para poder jugar con él

Feature: Crear Personaje
  Como usuario, quiero poder crear un personaje para empezar a jugar en el sistema.

  Scenario: Creación exitosa del personaje
    Given que el usuario selecciona una especie disponible
    And que el usuario introduce un nombre válido
    And que el usuario selecciona una clase
    And que el usuario selecciona una vestimenta
    And que el usuario acepta el modo rápido
    When el usuario selecciona "Ver personaje"
    Then el personaje aparece en la pantalla principal
    And el sistema emite un sonido de confirmación

  Scenario: Intentar crear personaje sin especie
    Given que el usuario intenta finalizar sin seleccionar especie
    When el usuario selecciona "Ver personaje"
    Then el sistema debería mostrar un mensaje de error indicando que falta la especie

  Scenario: Intentar crear personaje sin nombre
    Given que el usuario selecciona una especie disponible
    When el usuario intenta finalizar sin introducir nombre
    Then el sistema debería mostrar un mensaje de error indicando que falta el nombre


Feature: Recuperación de Contraseña
  Como usuario de QuestifyMe que olvidé mi contraseña
  Quiero poder restablecer mi contraseña de forma segura
  Para recuperar el acceso a mi cuenta y personaje

  Background:
    Given que he solicitado recuperar mi contraseña
    And he recibido un enlace de recuperación por email

  Scenario: Usuario accede al enlace en menos de 12 horas
    Given que el enlace fue enviado hace 6 horas
    When accedo al enlace de recuperación
    Then debería ver el formulario para crear nueva contraseña
    And el enlace debería ser válido

  Scenario: Usuario accede al enlace 2 semanas después
    Given que el enlace fue enviado hace 14 días
    When accedo al enlace de recuperación
    Then debería ver el mensaje "Este enlace ha expirado"
    And debería ver la opción para solicitar un nuevo enlace

  Scenario: Usuario llena completamente el formulario
    Given que estoy en el formulario de nueva contraseña
    When ingreso "NuevaContraseña123!" en el campo nueva contraseña
    And ingreso "NuevaContraseña123!" en el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then la contraseña debería actualizarse exitosamente
    And debería recibir un email de confirmación
    And debería ser redirigido a la pantalla de login

  Scenario: Usuario llena mayoría de campos pero no todos
    Given que estoy en el formulario de nueva contraseña
    When ingreso "NuevaContraseña123!" en el campo nueva contraseña
    And dejo vacío el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "Confirma tu nueva contraseña"
    And la contraseña no debería actualizarse

  Scenario: Usuario llena pocos campos
    Given que estoy en el formulario de nueva contraseña
    When ingreso "abc" en el campo nueva contraseña
    And dejo vacío el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then debería ver múltiples mensajes de error
    And la contraseña no debería actualizarse

  Scenario: Usuario no llena el formulario
    Given que estoy en el formulario de nueva contraseña
    When dejo todos los campos vacíos
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "La contraseña es requerida"
    And la contraseña no debería actualizarse

  Scenario: Contraseña cumple todos los requisitos
    Given que estoy en el formulario de nueva contraseña
    When ingreso "SecurePass123!" en el campo nueva contraseña
    And ingreso "SecurePass123!" en el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then la contraseña debería cumplir con 8 caracteres mínimo
    And debería cumplir con al menos una mayúscula
    And debería cumplir con al menos un número
    And debería cumplir con al menos un carácter especial
    And la contraseña debería actualizarse exitosamente

  Scenario: Contraseña le falta un requisito
    Given que estoy en el formulario de nueva contraseña
    When ingreso "SecurePass123" en el campo nueva contraseña # Sin carácter especial
    And ingreso "SecurePass123" en el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "La contraseña debe contener al menos un carácter especial"
    And la contraseña no debería actualizarse

  Scenario: Contraseña no cumple ningún requisito
    Given que estoy en el formulario de nueva contraseña
    When ingreso "abc" en el campo nueva contraseña
    And ingreso "abc" en el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "La contraseña debe tener al menos 8 caracteres"
    And debería ver el mensaje "Debe contener al menos una mayúscula"
    And debería ver el mensaje "Debe contener al menos un número"
    And debería ver el mensaje "Debe contener al menos un carácter especial"
    And la contraseña no debería actualizarse

  Scenario: Usuario ingresa contraseñas que no coinciden
    Given que estoy en el formulario de nueva contraseña
    When ingreso "SecurePass123!" en el campo nueva contraseña
    And ingreso "DifferentPass456!" en el campo confirmar contraseña
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "Las contraseñas no coinciden"
    And la contraseña no debería actualizarse

  Scenario: Usuario usa contraseña anterior
    Given que estoy en el formulario de nueva contraseña
    When ingreso mi contraseña anterior
    And ingreso mi contraseña anterior en confirmación
    And presiono el botón "Cambiar Contraseña"
    Then debería ver el mensaje "No puedes usar tu contraseña anterior"
    And la contraseña no debería actualizarse
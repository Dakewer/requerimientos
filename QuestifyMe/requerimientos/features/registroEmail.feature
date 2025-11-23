# features/registro_email_contrasena.feature

Feature: Registro con Email y Contraseña
  Como usuario nuevo de QuestifyMe
  Quiero poder registrarme con mi email y contraseña
  Para crear mi cuenta y comenzar mi aventura gamificada

  Scenario: Usuario usa un nombre que jamás se ha registrado
    Given que estoy en la pantalla de registro
    When ingreso "AventureroNovato" en el campo nombre
    And ingreso "nuevo@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And debería ver el mensaje "Un correo de verificación ha sido enviado a nuevo@ejemplo.com"

  Scenario: Usuario usa un nombre que ya fue registrado
    Given que estoy en la pantalla de registro
    When ingreso "AventureroExistente" en el campo nombre
    And ingreso "existente@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And debería ver el mensaje "Un correo de verificación ha sido enviado a existente@ejemplo.com"
    # Nota: Los nombres pueden repetirse, solo los emails son únicos

  Scenario: Usuario no escribe nada en el campo de nombre
    Given que estoy en la pantalla de registro
    When dejo el campo nombre vacío
    And ingreso "usuario@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "El nombre es obligatorio"
    And el registro no debería completarse

  Scenario: Usuario inserta una contraseña de 8 caracteres
    Given que estoy en la pantalla de registro
    When ingreso "Usuario8Chars" en el campo nombre
    And ingreso "usuario8@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña  # Exactamente 8 caracteres
    And ingreso "Pass123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And la contraseña debería cumplir el requisito de longitud mínima

  Scenario: Usuario inserta una contraseña de 7 caracteres
    Given que estoy en la pantalla de registro
    When ingreso "Usuario7Chars" en el campo nombre
    And ingreso "usuario7@ejemplo.com" en el campo email
    And ingreso "Pass12!" en el campo contraseña  # Solo 7 caracteres
    And ingreso "Pass12!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "La contraseña debe tener al menos 8 caracteres"
    And el registro no debería completarse

  Scenario: Usuario no ingresa ninguna contraseña
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioSinPass" en el campo nombre
    And ingreso "sinpass@ejemplo.com" en el campo email
    And dejo el campo contraseña vacío
    And dejo el campo confirmar contraseña vacío
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "La contraseña es obligatoria"
    And el registro no debería completarse

  Scenario: Usuario pone un caracter especial
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioUnEspecial" en el campo nombre
    And ingreso "unespecial@ejemplo.com" en el campo email
    And ingreso "Password1!" en el campo contraseña  # Un solo carácter especial
    And ingreso "Password1!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And la contraseña debería cumplir el requisito de carácter especial

  Scenario: Usuario pone más de 1 caracter especial
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioDosEspecial" en el campo nombre
    And ingreso "dosespecial@ejemplo.com" en el campo email
    And ingreso "Pass@12!" en el campo contraseña  # Múltiples caracteres especiales
    And ingreso "Pass@12!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And la contraseña debería cumplir el requisito de carácter especial

  Scenario: Usuario no pone ningún caracter especial
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioSinEspecial" en el campo nombre
    And ingreso "sinespecial@ejemplo.com" en el campo email
    And ingreso "Password123" en el campo contraseña  # Sin caracteres especiales
    And ingreso "Password123" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "La contraseña debe contener al menos un carácter especial"
    And el registro no debería completarse

  Scenario: Usuario pone 1 letra mayúscula
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioUnaMayus" en el campo nombre
    And ingreso "unamayus@ejemplo.com" en el campo email
    And ingreso "Password1!" en el campo contraseña  # Una mayúscula
    And ingreso "Password1!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And la contraseña debería cumplir el requisito de mayúscula

  Scenario: Usuario no pone ninguna letra en mayúscula
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioSinMayus" en el campo nombre
    And ingreso "sinmayus@ejemplo.com" en el campo email
    And ingreso "password123!" en el campo contraseña  # Sin mayúsculas
    And ingreso "password123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "La contraseña debe contener al menos una mayúscula"
    And el registro no debería completarse

  Scenario: La contraseña confirmada es exactamente igual que la de contraseña
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioMatch" en el campo nombre
    And ingreso "match@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And las contraseñas deberían coincidir exactamente

  Scenario: Las contraseñas no coinciden
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioNoMatch" en el campo nombre
    And ingreso "nomatch@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass124!" en el campo confirmar contraseña  # Diferente
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "Las contraseñas no coinciden"
    And el registro no debería completarse

  Scenario: Usuario registra un teléfono
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioConTelefono" en el campo nombre
    And ingreso "contelefono@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And ingreso "+1234567890" en el campo teléfono
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And el teléfono debería guardarse en el perfil

  Scenario: Usuario no registra un teléfono
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioSinTelefono" en el campo nombre
    And ingreso "sintelefono@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And dejo el campo teléfono vacío
    And presiono el botón "Crear"
    Then el registro debería ser exitoso
    And el teléfono debería permanecer como nulo en el perfil

  Scenario: Se escribe algo que no es un número de teléfono
    Given que estoy en la pantalla de registro
    When ingreso "UsuarioTelefonoInvalido" en el campo nombre
    And ingreso "telefonoinvalido@ejemplo.com" en el campo email
    And ingreso "Pass123!" en el campo contraseña
    And ingreso "Pass123!" en el campo confirmar contraseña
    And ingreso "no-es-un-numero" en el campo teléfono
    And presiono el botón "Crear"
    Then debería ver el mensaje de error "Por favor ingresa un número de teléfono válido"
    And el registro no debería completarse
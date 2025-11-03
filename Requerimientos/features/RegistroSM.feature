Feature: Registro con redes sociales
  El sistema ofrece autenticación con Google y Apple usando los flujos oficiales
  OAuth 2.0. Si el usuario ya tiene una cuenta vinculada, debe acceder sin crear
  un registro nuevo. Si es un usuario nuevo, se crea la cuenta usando nombre y
  correo del proveedor. Si la conexión falla o el token es inválido, se muestra
  un mensaje claro y no se guarda información parcial. La sesión se mantiene
  activa mediante un token/JWT persistente y se registra en BD el proveedor usado.

  Background:
    Given la app está abierta en la pantalla de inicio de sesión
    And se muestran las opciones “Continuar con Google” y “Continuar con Apple”

  # 1) Inicio de sesión exitoso con Google (usuario existente)
  Scenario: Acceso exitoso con Google
    When el usuario elige “Continuar con Google” e introduce credenciales válidas
    Then el acceso es exitoso
    And el usuario vuelve al Home
    And no se crea un registro nuevo en la BD

  # 2) Primer inicio con Apple → alta de usuario y bienvenida
  Scenario: Crear cuenta nueva con Apple y dar la bienvenida
    When el usuario selecciona “Continuar con Apple” e inicia sesión por primera vez
    Then se crea un nuevo usuario en la BD con los datos del proveedor
    And se muestra un mensaje de bienvenida
    And el usuario es redirigido al Home

  # 3) Evitar duplicados: usuario ya registrado con Google
  Scenario: Reconocer ID externo y evitar duplicado
    Given existe en la BD una cuenta vinculada a un UID de Google
    When el usuario inicia sesión nuevamente con “Continuar con Google”
    Then el sistema reconoce el ID externo
    And permite el acceso sin duplicar el registro en la BD

  # 4) Cancelación del flujo de autenticación por el usuario
  Scenario: Cancelar ventana del proveedor
    When el usuario cancela la ventana de autenticación del proveedor
    Then regresa a la pantalla de inicio de sesión
    And no se crea ni modifica ningún registro en la BD

  # 5) Token inválido/expirado devuelto por el proveedor
  Scenario: Manejar token inválido del proveedor
    When el proveedor devuelve un token inválido o expirado
    Then se muestra el mensaje “Token inválido, inténtalo de nuevo”
    And no se guarda información parcial en la BD

  # 6) Pérdida de conexión antes de validar con el proveedor
  Scenario: Falla de conexión durante la autenticación
    Given no hay conexión a internet
    When el usuario intenta autenticarse con Google o Apple
    Then se muestra el error “No se pudo conectar con el proveedor”
    And no se guarda información parcial en la BD

  # 7) Sesión persistente tras token válido
  Scenario: Mantener sesión activa con token persistente
    When el sistema recibe un token válido del proveedor
    Then se genera un JWT interno y se establece una sesión persistente
    And la sesión permanece activa al volver a abrir la app

  # 8) Auditoría y trazabilidad del proveedor usado
  Scenario: Registrar proveedor y UID en el sistema
    When el inicio de sesión concluye correctamente
    Then el sistema registra en el log/BD el proveedor utilizado y el UID asociado
    And la información queda disponible para auditoría
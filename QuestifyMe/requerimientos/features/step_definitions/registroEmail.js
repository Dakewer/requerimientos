// features/step_definitions/registro_email_contrasena_steps.js

const { Given, When, Then } = require('@cucumber/cucumber');

// Estado global para el registro
let estadoRegistro = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    registroExitoso: false,
    errores: [],
    mensaje: ''
};

Given('que estoy en la pantalla de registro', function () {
    // Reset del estado para cada scenario
    estadoRegistro = {
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        registroExitoso: false,
        errores: [],
        mensaje: ''
    };
    return 'pending';
});

When('ingreso {string} en el campo nombre', function (nombre) {
    estadoRegistro.nombre = nombre;
    return 'pending';
});

When('dejo el campo nombre vacío', function () {
    estadoRegistro.nombre = '';
    return 'pending';
});

When('ingreso {string} en el campo email', function (email) {
    estadoRegistro.email = email;
    return 'pending';
});

When('ingreso {string} en el campo contraseña', function (password) {
    estadoRegistro.password = password;
    return 'pending';
});

When('dejo el campo contraseña vacío', function () {
    estadoRegistro.password = '';
    return 'pending';
});

When('ingreso {string} en el campo confirmar contraseña', function (confirmPassword) {
    estadoRegistro.confirmPassword = confirmPassword;
    return 'pending';
});

When('dejo el campo confirmar contraseña vacío', function () {
    estadoRegistro.confirmPassword = '';
    return 'pending';
});

When('ingreso {string} en el campo teléfono', function (telefono) {
    estadoRegistro.telefono = telefono;
    return 'pending';
});

When('dejo el campo teléfono vacío', function () {
    estadoRegistro.telefono = '';
    return 'pending';
});

When('presiono el botón {string}', function (boton) {
    if (boton === 'Crear') {
        // Simular procesamiento de registro
        estadoRegistro.errores = validarRegistro(estadoRegistro);
        estadoRegistro.registroExitoso = estadoRegistro.errores.length === 0;

        if (estadoRegistro.registroExitoso) {
            estadoRegistro.mensaje = `Un correo de verificación ha sido enviado a ${estadoRegistro.email}`;
        }
    }
    return 'pending';
});

Then('el registro debería ser exitoso', function () {
    return 'pending';
});

Then('debería ver el mensaje {string}', function (mensajeEsperado) {
    return 'pending';
});

Then('debería ver el mensaje de error {string}', function (mensajeErrorEsperado) {
    return 'pending';
});

Then('el registro no debería completarse', function () {
    return 'pending';
});

Then('la contraseña debería cumplir el requisito de longitud mínima', function () {
    return 'pending';
});

Then('la contraseña debería cumplir el requisito de carácter especial', function () {
    return 'pending';
});

Then('la contraseña debería cumplir el requisito de mayúscula', function () {
    return 'pending';
});

Then('las contraseñas deberían coincidir exactamente', function () {
    return 'pending';
});

Then('el teléfono debería guardarse en el perfil', function () {
    return 'pending';
});

Then('el teléfono debería permanecer como nulo en el perfil', function () {
    return 'pending';
});

// Función helper para validaciones
function validarRegistro(datos) {
    const errores = [];

    // Validar nombre
    if (!datos.nombre || datos.nombre.trim().length === 0) {
        errores.push('El nombre es obligatorio');
    } else if (datos.nombre.trim().length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres');
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.email)) {
        errores.push('Por favor ingresa un email válido');
    }

    // Validar contraseña
    if (!datos.password) {
        errores.push('La contraseña es obligatoria');
    } else {
        if (datos.password.length < 8) {
            errores.push('La contraseña debe tener al menos 8 caracteres');
        }
        if (!/[A-Z]/.test(datos.password)) {
            errores.push('La contraseña debe contener al menos una mayúscula');
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(datos.password)) {
            errores.push('La contraseña debe contener al menos un carácter especial');
        }
    }

    // Validar confirmación de contraseña
    if (datos.password !== datos.confirmPassword) {
        errores.push('Las contraseñas no coinciden');
    }

    // Validar teléfono (opcional)
    if (datos.telefono && datos.telefono.trim() !== '') {
        const telefonoRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!telefonoRegex.test(datos.telefono)) {
            errores.push('Por favor ingresa un número de teléfono válido');
        }
    }

    return errores;
}

// Exportar el estado para tests
module.exports = { estadoRegistro };
// ----------- Logica para el registro de nuevos usuarios --------------//


// Recuperar usuarios desde localStorage o usar un array inicial
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

console.log(usuarios);

const formulario = document.getElementById("user-register-form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombres = document.getElementById("nombre-input").value;
    const apellidos = document.getElementById("apellido-input").value;
    const dni = document.getElementById("dni-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const passwordsCoinciden = document.getElementById("repeat-password-input").value === password;

    // Verificar si el email ya está registrado
    const usuarioExiste = usuarios.some(usuario => usuario.email === email);

    if (usuarioExiste) {
        return mostrarMensaje("Email ya registrado.", "error");
    }

    if (!passwordsCoinciden) {
        return mostrarMensaje("Las contraseñas no coinciden.", "error");
    }

    if (!nombres || !apellidos || !dni || !email || !password || !document.getElementById("repeat-password-input").value) {
        return mostrarMensaje("Todos los campos son obligatorios.", "error");
    }

    // Crear el nuevo usuario
    const nuevoUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        dni: dni,
        idusuario: usuarios.length + 1,
        email: email,
        password: password,
    };

    // Agregar el usuario al array
    usuarios.push(nuevoUsuario);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarMensaje("Usuario registrado exitosamente.", "success");

    // Opcional: Limpia el formulario
    formulario.reset();
});

const mostrarMensaje = (mensaje, tipo) => {
    const mensajeDiv = document.querySelector('#error-message');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo;
};
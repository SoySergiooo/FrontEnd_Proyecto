//--------------------SCRIPS DE USUARIOS------------------------//

/* import usuarios from './arrayUsuarios.js';
console.log(usuarios); */

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

console.log(usuarios);

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form');

    formLogin.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('email-input').value.trim().toLowerCase();
      const password = document.getElementById('password-input').value.trim();

      iniciarSesion(email, password);
    });
  });


  function borrarUsuario(email) {
    // Obtener el arreglo de usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Filtrar el usuario que deseas eliminar por su email
    usuarios = usuarios.filter(usuario => usuario.email !== email);

    // Guardar el nuevo arreglo actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Usuario eliminado');
}

borrarUsuario('');


const iniciarSesion = (email, password) => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email.trim().toLowerCase() === email);

    if (!usuarioEncontrado) {
        mostrarMensaje("Email no registrado.", "error");
        return false;
    }
    if (usuarioEncontrado.password !== password) {
        mostrarMensaje("Contraseña incorrecta.", "error");
        return false;
    }

    sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
    redirigirIndex();
    console.log("Inicio de sesión exitoso.");
    return false;
};

/* document.querySelector('button').addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    iniciarSesion(email, password);
}); */

const mostrarMensaje = (mensaje, tipo) => {
    const mensajeDiv = document.querySelector('#error-message');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo;
};

const redirigirIndex = () => {
    window.location.href = "index.html";
};

const configurarInterfaz = () => {
    const usuarioLogueado = sessionStorage.getItem("usuario");
    const btnInicioSesion = document.querySelector('#icono-login');
    const btnCerrarSesion = document.querySelector('#icono-logout');

    if (usuarioLogueado) {
        btnInicioSesion.style.display = "none";
        btnCerrarSesion.style.display = "block";
    } else {
        btnInicioSesion.style.display = "block";
        btnCerrarSesion.style.display = "none";
    }
};

// Cerrar sesión
const cerrarSesion = () => {
    sessionStorage.removeItem("usuario");
    configurarInterfaz();
    window.location.href = "login.html";
};

document.addEventListener('DOMContentLoaded', configurarInterfaz);



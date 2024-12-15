//--------------------SCRIPS DE USUARIOS------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');

    formLogin.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value.trim();

      iniciarSesion(email, password);
    });
  });

const usuarios = [
    {
        idusuario: "001",
        email: "usuario1@gmail.com",
        password: "asdf1234"
    },
    {
        idusuario: "002",
        email: "usuario2@gmail.com",
        password: "1234asdf"
    },
    {
        idusuario: "003",
        email: "usuario3@gmail.com",
        password: "1234zxcv"
    },
];

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
    const mensajeDiv = document.querySelector('#mensaje');
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


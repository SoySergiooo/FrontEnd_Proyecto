//Arreglo de productos

const catalogo = [
    {
        id: 1,
        nombre: "Cartera A",
        categoria: "Mujer",
        tipo: "Cartera",
        precio: 200,
        linkimg: "../images/Cartera A.png",
        alt: "Cartera A",
        linkbutton: "PagCarteraA.html"
    },
    {
        id: 2,
        nombre: "Mochila A",
        categoria: "Niño",
        tipo: "Mochila",
        precio: 150,
        linkimg: "../images/Mochila A.png",
        alt: "Mochila A",
        linkbutton: "PagMochilaA.html"
    },
    {
        id: 3,
        nombre: "Cartera B",
        categoria: "Mujer",
        tipo: "Cartera",
        precio: 110,
        linkimg: "../images/Cartera B.png",
        alt: "Cartera B",
        linkbutton: "PagCarteraB.html"
    },
    {
        id: 4,
        nombre: "Maleta A",
        categoria: "Hombre",
        tipo: "Maleta",
        precio: 220,
        linkimg: "../images/Maleta A.png",
        alt: "Maleta A",
        linkbutton: "PagMaletaA.html"
    },
    {
        id: 5,
        nombre: "Maleta B",
        categoria: "Mujer",
        tipo: "Maleta",
        precio: 300,
        linkimg: "../images/Maleta B.png",
        alt: "Maleta B",
        linkbutton: "PagMaletaB.html"
    },
    {
        id: 6,
        nombre: "Mochila B",
        categoria: "Hombre",
        tipo: "Mochila",
        precio: 280,
        linkimg: "../images/Mochila B.png",
        alt: "Mochila B",
        linkbutton: "PagMochilaB.html"
    },
    {
        id: 7,
        nombre: "Mochila C",
        categoria: "Niño",
        tipo: "Mochila",
        precio: 250,
        linkimg: "../images/Mochila C.jpg",
        alt: "Mochila C",
        linkbutton: "PagMochilaC.html"
    },
];






// Mostrar productos en el catálogo
function mostrarProductos(productos) {
    const catalogoDiv = document.getElementById("catalogo");
    catalogoDiv.innerHTML = "";

    productos.forEach((producto) => {
        const productoDiv = document.createElement("article");
        productoDiv.classList.add("art-producto");

        productoDiv.innerHTML = `
            <div class="div-content">
                <div class="imagen">
                    <img src="${producto.linkimg}" alt="${producto.alt}">
                </div>
                <h2>${producto.nombre}</h2>
                <p>Tipo: <span class="tipo-producto">${producto.tipo}</span></p>
                <p>Categoria: <span class="cat-producto">${producto.categoria}</span></p>
                <p>Precio: S/.<span class="precio-producto">${producto.precio}</span></p>
            </div>
        `;

        // Crear botón "Agregar al Carrito"
        const botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar al Carrito";
        botonAgregar.classList.add("BotonAgregarCarrito");

        // Asignar evento al botón y pasar el producto como argumento
        botonAgregar.addEventListener("click", () => agregarAlCarrito(producto));

        // Añadir el botón al artículo del producto
        productoDiv.appendChild(botonAgregar);

        catalogoDiv.appendChild(productoDiv);
    });
}

// Agregar producto al carrito con contador y guardarlo en Local Storage
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya está, incrementar la cantidad
        productoExistente.cantidad += 1;
        alert(`Se agregó otra unidad de "${producto.nombre}" al carrito.`);
    } else {
        // Si no está, agregarlo al carrito con cantidad inicial de 1
        carrito.push({ ...producto, cantidad: 1 });
        alert(`Producto "${producto.nombre}" agregado al carrito.`);
    }

    // Guardar el carrito actualizado en Local Storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar el estado del carrito (vacío o lleno)
    actualizarIconosCarrito();
}

// Función para actualizar los iconos del carrito (vacío/lleno)
function actualizarIconosCarrito() {
    const iconoCarritoVacio = document.getElementById("icono-carrito-vacio");
    const iconoCarritoLleno = document.getElementById("icono-carrito-lleno");

    // Verificar si el carrito tiene productos
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length > 0) {
        iconoCarritoVacio.style.display = "none";
        iconoCarritoLleno.style.display = "block";
    } else {
        iconoCarritoVacio.style.display = "block";
        iconoCarritoLleno.style.display = "none";
    }
}

// Llamar a la función de actualización al cargar la página
document.addEventListener("DOMContentLoaded", actualizarIconosCarrito);












// Filtrar productos por categorías
function filtrarProductos(categoria) {
    if (categoria === "Todos") {
        mostrarProductos(catalogo);
    } else {
        const productosFiltrados = catalogo.filter(
            (producto) => producto.categoria === categoria
        );
        mostrarProductos(productosFiltrados);
    }
}

// Eventos para los filtros
document.getElementById("btn-hombre").addEventListener("click", () => filtrarProductos("Hombre"));
document.getElementById("btn-mujer").addEventListener("click", () => filtrarProductos("Mujer"));
document.getElementById("btn-nino").addEventListener("click", () => filtrarProductos("Niño"));
document.getElementById("btn-todos").addEventListener("click", () => filtrarProductos("Todos"));

// Agregar la clase "selected" al botón activo
document.querySelectorAll(".btn-filter").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".btn-filter").forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

// Mostrar productos al cargar la página
mostrarProductos(catalogo);







//Filtrar productos por hombre, mujer y niños
function filtrarProductos(categoria) {
    if (categoria === 'Todos') {
        mostrarProductos(catalogo);
    } else {
        const productosFiltrados = catalogo.filter(producto => producto.categoria === categoria);
        mostrarProductos(productosFiltrados);
    }
}

document.getElementById('btn-hombre').addEventListener('click', () => filtrarProductos('Hombre'));
document.getElementById('btn-mujer').addEventListener('click', () => filtrarProductos('Mujer'));
document.getElementById('btn-nino').addEventListener('click', () => filtrarProductos('Niño'));
document.getElementById('btn-todos').addEventListener('click', () => filtrarProductos('Todos'));


//Agregar la clase "selected" al boton de filtro que está activo
document.querySelectorAll('.btn-filter').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});






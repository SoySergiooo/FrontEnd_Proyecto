//Arreglo de productos

const catalogo = [
    {
        nombre: "Cartera A",
        categoria: "Mujer",
        tipo: "Cartera",
        precio: "S/200.00",
        linkimg: "../images/Cartera A.png",
        alt: "Cartera A",
        linkbutton: "PagCarteraA.html"
    },
    {
        nombre: "Mochila A",
        categoria: "Niño",
        tipo: "Mochila",
        precio: "S/150.00",
        linkimg: "../images/Mochila A.png",
        alt: "Mochila A",
        linkbutton: "PagMochilaA.html"
    },
    {
        nombre: "Cartera B",
        categoria: "Mujer",
        tipo: "Cartera",
        precio: "S/110.00",
        linkimg: "../images/Cartera B.png",
        alt: "Cartera B",
        linkbutton: "PagCarteraB.html"
    },
    {
        nombre: "Maleta A",
        categoria: "Hombre",
        tipo: "Maleta",
        precio: "S/220.00",
        linkimg: "../images/Maleta A.png",
        alt: "Maleta A",
        linkbutton: "PagMaletaA.html"
    },
    {
        nombre: "Maleta B",
        categoria: "Mujer",
        tipo: "Maleta",
        precio: "S/300.00",
        linkimg: "../images/Maleta B.png",
        alt: "Maleta B",
        linkbutton: "PagMaletaB.html"
    },
    {
        nombre: "Mochila B",
        categoria: "Hombre",
        tipo: "Mochila",
        precio: "S/280.00",
        linkimg: "../images/Mochila B.png",
        alt: "Mochila B",
        linkbutton: "PagMochilaB.html"
    },
    {
        nombre: "Mochila C",
        categoria: "Niño",
        tipo: "Mochila",
        precio: "S/250.00",
        linkimg: "../images/Mochila C.jpg",
        alt: "Mochila C",
        linkbutton: "PagMochilaC.html"
    },
];


//Función para mostrar productos dinámicamente usando innerHtml y Apenchild
function mostrarProductos(productos) {
    const catalogoDiv = document.getElementById('catalogo');
    catalogoDiv.innerHTML = '';

    productos.forEach(producto => {
        const productoDiv = document.createElement('article');
        productoDiv.classList.add('art-producto');

        productoDiv.innerHTML = `
            <div class="div-content">
                <div class="imagen">
                    <img src="${producto.linkimg}" alt="${producto.alt}">
                </div>
                <h2>${producto.nombre}</h2>
                <p>Tipo: <span class="tipo-producto">${producto.tipo}</span></p>
                <p>Categoria: <span class="cat-producto">${producto.categoria}</span></p>
                <p>Precio: <span class="precio-producto">${producto.precio}</span></p>
            </div>
            <a href="${producto.linkbutton}" class="BotonAgregarCarrito">Agregar al Carrito</a>
        `;
        catalogoDiv.appendChild(productoDiv);
    });
}

//ejecución de la función para que muestre los productos en el index.
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
document.addEventListener("DOMContentLoaded", () => {
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
});
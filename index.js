// Seleccionamos el botón del menú
const menuBtn = document.getElementById("menuBtn");

// Seleccionamos el menú de navegación
const nav = document.querySelector("nav");

// Cuando hacemos clic en el botón
menuBtn.addEventListener("click", function () {

    // Mostrar u ocultar el menú
    nav.classList.toggle("active");

});
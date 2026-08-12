function proximamente(evento, nombre) {

    evento.preventDefault();

    alert(
        "🚧 " + nombre +
        "\n\nEsta sección estará disponible próximamente."
    );
}

document.addEventListener("DOMContentLoaded", function () {

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function (tarjeta, index) {

        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(20px)";

        setTimeout(function () {

            tarjeta.style.transition =
                "opacity 0.5s ease, transform 0.5s ease";

            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";

        }, 150 * index);

    });

});
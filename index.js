document.addEventListener('DOMContentLoaded', () => {
    const btnIniciar = document.querySelector('.btn-iniciar');
    const btnRegistrar = document.querySelector('.btn-registrar');

    [btnIniciar, btnRegistrar].forEach(boton => {
        if (boton) {
            boton.addEventListener('click', () => {
                boton.style.transform = 'scale(0.96)';
                boton.style.opacity = '0.8';
            });
        }
    });
});
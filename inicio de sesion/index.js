document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('formLogin');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('correo').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === '' || password === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            localStorage.setItem('usuarioActivo', email);
            alert('¡Inicio de sesión exitoso!');
        });
    }
});

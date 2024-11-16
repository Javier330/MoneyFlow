// Función para manejar el desplazamiento suave a las secciones de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Manejador para los botones de suscripción
document.querySelectorAll('.cta-button.subscribe').forEach(button => {
    button.addEventListener('click', function () {
        alert('¡Gracias por suscribirte!');
    });
});

// Manejador para los botones de prueba gratuita
document.querySelectorAll('.cta-button.free-trial').forEach(button => {
    button.addEventListener('click', function () {
        alert('¡Disfruta tu prueba gratuita de 30 días!');
    });
});

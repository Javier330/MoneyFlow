// script.js

// Ejecutar el código después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el desplazamiento suave a las secciones de la página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // Desplazamiento suave
                    block: 'start'     // Alinea con la parte superior
                });
            }
        });
    });

    // Manejador para los botones de suscripción en los planes
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'https://javier330.github.io/registro/'; // Redirige a una página específica
        });
    });
});

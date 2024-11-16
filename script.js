// script.js

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

    // Aquí podrías añadir redireccionamiento o más acciones
});

// Manejador para los botones de suscripción en los planes
document.querySelectorAll('.plans .cta-button').forEach(button => {
    button.addEventListener('click', function () {
        window.location.href = 'https://javier330.github.io/registro/'; // Redirige ana pagina especifica
        // Aquí podrías añadir lógica adicional o redireccionamiento
    });
});

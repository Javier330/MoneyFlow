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
    document.querySelectorAll('.plans .cta-button').forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'https://javier330.github.io/registro/'; // Redirige a una página específica
        });
    });

    // Alternar Modo Oscuro
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    });

    // Efecto de desvanecimiento
    const fadeIns = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    fadeIns.forEach(fade => observer.observe(fade));

    // Carrusel de testimonios
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    const showTestimonial = index => {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    // Efecto de desvanecimiento al desplazarse
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));

    // Modo oscuro/claro
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Testimonios interactivos
    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    setInterval(() => {
        testimonials[index].classList.remove('active');
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add('active');
    }, 3000);
});

// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

// Avanzar al siguiente slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Reinicia al inicio
    }
    updateCarousel();
}

// Retroceder al slide anterior
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Va al último slide
    }
    updateCarousel();
}

// Actualizar el carrusel
function updateCarousel() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const offset = -slideIndex * 100; // Mover el carrusel en base al índice
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

// Hacer que el carrusel avance automáticamente
function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000); // Cambia cada 5 segundos
}

// Iniciar el carrusel automático
autoSlide();
let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-slide img');
let dots = document.querySelectorAll('.dot');
let autoPlayInterval;

// Inicializa la primera imagen y activa el primer punto.
showSlide(currentIndex);

// Control para avanzar o retroceder entre las imágenes.
function moveSlide(n) {
    currentIndex += n;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
    resetAutoPlay(); // Reinicia el autoplay cuando se cambia manualmente.
}

// Control para seleccionar una imagen específica mediante los puntos.
function currentSlide(n) {
    currentIndex = n - 1;
    showSlide(currentIndex);
    resetAutoPlay();
}

// Función principal para mostrar la imagen correcta y activar el punto correspondiente.
function showSlide(n) {
    document.querySelector('.carousel-slide').style.transform = `translateX(-${n * 100}%)`;
    dots.forEach((dot, index) => {
        dot.className = (index === n) ? 'dot active' : 'dot';
    });
}

// Función de autoplay, que cambia la imagen automáticamente.
function autoPlay() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Inicia el autoplay cada 3 segundos.
autoPlayInterval = setInterval(autoPlay, 3000);

// Función para reiniciar el autoplay cuando se cambia de imagen manualmente.
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(autoPlay, 3000);
}
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn')
    const nextButton = document.querySelector('.next-btn')
    const carouselInner = document.querySelector('.carousel-inner')
    const items = document.querySelectorAll('.carousel-item')
    let currentIndex = 0

    function updateCarousel() {
        const offset = -currentIndex * 100
        carouselInner.style.transform = `translateX(${offset}%)`
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1
        updateCarousel()
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0
        updateCarousel()
    })

    setInterval(function() {
        nextButton.click()
    }, 5000)
});
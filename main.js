document.addEventListener('DOMContentLoaded', function () {
    const images = [
        './imagenes/1.jpg', './imagenes/2.jpg', './imagenes/3.jpg', './imagenes/4.jpg', './imagenes/5.jpg',
        './imagenes/6.jpg', './imagenes/7.jpg', './imagenes/8.jpg', './imagenes/9.jpg', './imagenes/10.jpg'
    ];
    const slider = document.getElementById('slider');
    let currentIndex = 0;

    // Crear las diapositivas
    for (let i = 0; i < images.length; i++) {
        let slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${images[i]})`;
        if (i === 0) slide.classList.add('active');
        slider.appendChild(slide);
    }

    // Función para mostrar la siguiente diapositiva
    function showNextSlide() {
        let slides = document.querySelectorAll('.slide');
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    // Cambiar la imagen cada hora (3600000 ms)
    setInterval(showNextSlide, 300000);
});

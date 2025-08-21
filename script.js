document.addEventListener('DOMContentLoaded', () => {
    // Код для модального окна остается прежним
    const orderButtons = document.querySelectorAll('.order-button');
    const modal = document.getElementById("order-modal");
    const span = document.getElementsByClassName("close-btn")[0];

    orderButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        }
    });

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Обновленный код для слайдера
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slider-img");
    const dots = document.querySelectorAll(".dot");

    function showSlides(n) {
        // Убираем активный класс со всех слайдов и точек
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Проверяем границы массива
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        // Добавляем активный класс текущему слайду и точке
        slides[slideIndex].classList.add('active-slide');
        dots[slideIndex].classList.add('active');
    }

    // Переключение по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlides(slideIndex = index);
        });
    });

    // Автоматическое переключение слайдов
    function carousel() {
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        
        slides[slideIndex].classList.add('active-slide');
        dots[slideIndex].classList.add('active');
        
        setTimeout(carousel, 5000); // Переключение каждые 5 секунд
    }
    
    // Изначально показываем первый слайд и запускаем карусель
    slides[slideIndex].classList.add('active-slide');
    dots[slideIndex].classList.add('active');
    setTimeout(carousel, 5000);

});
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки "Оформить заказ"
    const orderButtons = document.querySelectorAll('.order-button');
    const modal = document.getElementById("order-modal");
    const span = document.getElementsByClassName("close-btn")[0];

    // Открываем модальное окно при нажатии на любую из кнопок
    orderButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        }
    });

    // Закрыть модальное окно при нажатии на крестик
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Закрыть модальное окно при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// Получаем элементы
var modal = document.getElementById("order-modal");
var btn = document.getElementById("open-modal-btn");
var span = document.getElementsByClassName("close-btn")[0];

// При нажатии на кнопку, открываем модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// При нажатии на крестик, закрываем модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// При нажатии вне модального окна, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Получаем модальное окно
var modal = document.getElementById("privacy-policy-modal");

// Получаем кнопки, которые открывают модальное окно
var buttons = document.querySelectorAll(".button-rashitat-stoimost button, .calculate-button-container button, .zakazat-zvonok button, #button-submit, #go, .button-nash-avtopark button, .calculate-button, .zakazat-zvonok-button button, #call");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открывается модальное окно
buttons.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "block";
    }
});

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.header-button a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
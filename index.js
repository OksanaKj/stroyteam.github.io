function contactUs() {
    alert("Спасибо за интерес! Мы свяжемся с вами в ближайшее время.");
}

function openMenu() {
    const burger = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('#nav-links');
    const close = document.querySelector('.close');

    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
    close.classList.toggle('active');
}

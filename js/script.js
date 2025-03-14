document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 92,
                behavior: 'smooth'
            });
        }
    });
});

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

function scrollEvent() {
    let fadeElement = document.querySelectorAll('.fade-in');
    let trigger = window.innerHeight - 10;

    fadeElement.forEach(element => {
        let box = element.getBoundingClientRect();
        if (box.top < trigger) {
            element.classList.add('visible');
        }
    })
};

scrollEvent()

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', scrollEvent);
    scrollEvent();
});
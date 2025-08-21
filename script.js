const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const bars  = document.getElementById('bars');

burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    bars.classList.toggle("fa-bars");
    bars.classList.toggle("fa-times");

    burger.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
});

menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        menu.classList.add('hidden');
        bars.classList.remove('fa-times');
        bars.classList.add('fa-bars');
        burger.setAttribute('aria-expanded', 'false');
    });
});

var typed = new Typed('#typing', {
    strings: ['Hello, ', "I'm Omnia Tawfek","FrontEnd Developer"],
    typeSpeed: 70,
    loop: true,
    backDelay: 500,
    showCursor: false,
    });

        AOS.init({
        duration: 1000,
        once: true
        });

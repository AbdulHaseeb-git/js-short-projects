const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.offsetHeight;
const line = document.querySelector('.scroll-line');

window.addEventListener('scroll', () => {
    const Yposition = window.scrollY;

    let lineWidth = (Yposition / (documentHeight - windowHeight)) * 100;
    line.style.width = lineWidth + "%";
});

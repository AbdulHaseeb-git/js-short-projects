const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const sub = document.getElementById('submit');

h1.addEventListener('click',formDisplay);

function formDisplay(){
        form.classList.add('active');
        h1.removeEventListener('click',formDisplay);
}
function formHide(){
    form.classList.remove('active');
    h1.addEventListener('click',formDisplay);
}

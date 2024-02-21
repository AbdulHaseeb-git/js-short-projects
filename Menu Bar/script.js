const menu = document.querySelector('.menu');
const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');

menu.addEventListener('click',showLi);

function showLi(){
    ul.classList.add('active');
    menu.classList.add('passive');
}

lis.forEach((li,index)=>{
    li.addEventListener('click',()=>{
        menu.classList.remove('passive');
        ul.classList.remove('active');
    })
});
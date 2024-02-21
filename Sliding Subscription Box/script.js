const box = document.querySelector('.box');
const view = document.querySelector('.viewOption');
const cross = document.querySelector('.cross').addEventListener('click',()=>{
    box.classList.add('passive');
    view.classList.add('active');
})
view.addEventListener('click',()=>{
    box.classList.remove('passive');
    view.classList.remove('active');
})

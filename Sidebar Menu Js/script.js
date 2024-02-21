const btn = document.querySelector('button');
const cntn = document.querySelector('.content');
const ul= document.querySelector('ul');
const lis = document.querySelectorAll('li');
let oldli = null;
btn.addEventListener('click',()=>{
    ul.classList.toggle('flex');
    cntn.classList.toggle('contentWidth');
    btn.classList.toggle('btnLeft');
})
lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        if (oldli) {
            oldli.classList.remove('active');
        }

        li.classList.add('active');

        oldli = li;
    })
})
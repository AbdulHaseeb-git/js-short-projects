const body = document.querySelector('body');
const rounded = document.querySelector('.rounded');
const btn = document.getElementById('btn');
const label = document.querySelector('label');
let change = 1;

rounded.addEventListener('click',()=>{
    body.classList.toggle('changeColor');
    if(change%2== 1){
        btn.style.left = '5%';
        btn.style.backgroundColor ="darkcyan";
        change = change + 1;
    }
    else {
        btn.style.left = '50%';
        btn.style.backgroundColor = "grey";
        change = change + 1;
    }

})
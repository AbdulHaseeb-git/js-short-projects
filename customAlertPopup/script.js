const clickBtn = document.querySelector('.clickMe');
const box = document.querySelector('.box');
const cancel = document.getElementById('cancel');
const del = document.getElementById('delete');


clickBtn.addEventListener('click',()=>{
    clickBtn.classList.add('active');
    box.classList.add('active');
})

cancel.addEventListener('click',()=>{
    box.classList.remove('active');
    clickBtn.classList.remove('active');
})
del.addEventListener('click',()=>{
    box.classList.remove('active');
    clickBtn.classList.remove('active');
    setTimeout(()=>{alert("Account Deleted Successfully")},200);
})
const btn = document.getElementById("btn");
const notify = document.querySelector(".notify");

btn.addEventListener('click',setData);

function setData(){
    
    let add = Number(notify.getAttribute('data-count') || 0);
    notify.setAttribute('data-count', add + 1);
    console.log(notify);
    if(add === 0){
        notify.classList.add('aaa');
    }

}
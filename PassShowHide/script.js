const input = document.querySelector('input');
const i = document.querySelector('.fa-eye');
i.addEventListener('click',function(){
    if(input.type === "password"){
        input.type = "text";
        i.classList.add('hide');
        i.setAttribute("title","Hide Password")
        }else{
        input.type = "password";
        i.classList.remove('hide');
        i.setAttribute("title","Show Password")
        }
})
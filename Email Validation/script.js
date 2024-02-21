const mail = document.querySelector('#mail');
const para = document.querySelector('p');
const submit = document.querySelector('#submit');

let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


mail.addEventListener('input',()=>{
    if(mail.value.match(pattern)){
        para.style.color = 'gray';
        para.style.display = 'none';
        para.textContent = "Enter Email";
        submit.style.display = 'block';

    }else {
        para.style.display = 'block';
        para.style.color = 'red';
        para.textContent = "Enter Valid Email";
        submit.style.display = 'none';
    }
    
    if(mail.value === ''){
        para.style.color = 'gray';
        para.textContent = 'Enter Email';
    }
    
})
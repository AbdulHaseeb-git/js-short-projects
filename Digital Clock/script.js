const clock = document.querySelector('.display');

setInterval(function (){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(hr >12){
        hr = hr% 12;
        day = "PM";
    }else{
        day = "AM";
    }
    clock.textContent = hr + ' : ' + min + ' : '+ sec + ' '+ day;
} , 1000);


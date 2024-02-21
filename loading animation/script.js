const progress = document.getElementById('progress');
const span = document.querySelector('.progress-bar');
let value = progress.getAttribute('percentage') || 0;
let comment = progress.getAttribute('comment') || "Loading";

var progressing = setInterval(animate, 50);

function  animate(){
    // console.log(value);
    if(value < 99){
        value = value + 1;
        span.style.width = `${value}%`;
        progress.setAttribute('percentage',`${value} %`);
        progress.setAttribute('comment', comment);
    }
    else{
        comment = 'Completed';
        value = value + 1;
        span.style.width = `${value}%`;
        progress.setAttribute('percentage',`${value} %`);
        progress.setAttribute('comment', comment);
        clearInterval(progressing);
    }
        console.log(value);
}
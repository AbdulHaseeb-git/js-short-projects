const vid = document.querySelector('video');
const videoHeight = vid.offsetHeight;

window.addEventListener('scroll',()=>{
    if(window.scrollY > videoHeight){
        vid.classList.add('passive');
    }else{
        vid.classList.remove('passive');
    }
})



const btn= document.getElementById('btn');
window.addEventListener('scroll',activateButton);
btn.addEventListener('click',goToTop);
function activateButton(){
    if(scrollY> 0){
        btn.classList.add('show');
    }
    else{
        btn.classList.remove('show');
    }
}


function goToTop(){
    window.scrollTo({
        top:'0px',
        behavior : 'smooth'
    })
}
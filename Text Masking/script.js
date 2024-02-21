window.addEventListener('mousemove',(e)=>{
    let cursorX = e.pageX;
    let cursorY = e.pageY;
    let transX = ((7 * cursorX)/570) + 40;
    let transY = ((7 * cursorY)/570) + 50;
    let textDiv = document.querySelector('.textDiv');
    textDiv.style.backgroundPosition = transX +"%  " + -transY +"%"   ;
})
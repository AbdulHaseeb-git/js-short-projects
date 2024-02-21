

var scrollDown = Number(window.scrollY);
window.onscroll = function(){
    var scrollUp = Number(window.scrollY);
    console.log(scrollDown+ "down");
    console.log(scrollUp+ "up");
    if(scrollDown > scrollUp){
        document.querySelector('nav').style.top = '0px';
    }
    else{
        document.querySelector('nav').style.top = '-100px';
    }
    scrollDown = scrollUp;
}
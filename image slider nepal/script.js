const images = document.querySelectorAll('img');
const spans = document.querySelectorAll('span');
let translation = 0;
images.forEach((image,index) => {
    image.style.left = index * image.offsetWidth + 'px';
    console.log(image.offsetWidth);
    console.log(image.style.left);
});


spans.forEach((span,index)=>{
    span.addEventListener('click',()=>{goToImage(index)});
});

function goToImage(index){
    console.log(index+ " clicked now");
    images.forEach((image)=>{

        translation = -index * image.offsetWidth;
        image.style.transform = `translateX(${translation}px)`;
        // console.log(i);
        console.log(index); 
        console.log(image.style.left);
    })
}

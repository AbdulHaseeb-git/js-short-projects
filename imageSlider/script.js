const image = document.querySelectorAll(".image");
const btn = document.querySelector("#btn");
let counter = 0;
const setPosition = ()=>{
    for(let i= 0; i< image.length; i++){
        image[i].style.left = `${i * 100}%`;
    }
    
}
setPosition();


btn.addEventListener("click",()=>{
    counter == 2 ? counter = counter%2: counter++;

   image.forEach((img)=>{
    img.style.transform = `translateX(-${counter*100}%)`;
   })
})
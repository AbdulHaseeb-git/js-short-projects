


let card = document.querySelector('.card');
document.querySelector('body').addEventListener('mousemove', rotateCard);
document.querySelector('body').addEventListener('mouseout', emptyRotation);

function rotateCard(event) {
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let rotateX = ((centerY - mouseY) / centerY) * 20;
    let rotateY = ((centerX - mouseX) / centerX) * 20;

    card.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
}

function emptyRotation() {
    card.style.transform = "";
}

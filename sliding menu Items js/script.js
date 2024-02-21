const btn = document.querySelector('button');
const header = document.querySelector('.header');
const menuList = document.querySelector('.menuList');

header.addEventListener('click', (e) => {
    // Check if the target element is the 'header' element
    if (e.target === header || e.target === document.querySelector('h1')) {
        header.classList.toggle('full');
    }
});

btn.addEventListener('click', (e) => {
    // Prevent the click event from bubbling to the parent (header)
    e.stopPropagation();

    // Toggle the classes on the btn and menuList elements
    if(header.classList.contains('full')){
        header.classList.remove('full');
    }else{
        header.classList.add('full');
    }
    btn.classList.toggle('animate');
    menuList.classList.toggle('active');
});

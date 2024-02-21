const inp = document.querySelector('input');
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const para = document.querySelector('p');
const alphaDown = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphaUp = alphaDown.map(function(item) {
    return item.toUpperCase();
});
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const chars = ['`','~','!','@','#','%','$','%','^','&','*','(',')','-','_','+','\\','|',']','}','[','{','"',"'",';',':','/','?','.','>',',','<'];


// inp.addEventListener('input',()=>{
//     const inValue = inp.value;
//     if(inValue.length < 5 || inValue.split('').some(element =>
//         (alphaDown.includes(element) || alphaUp.includes(element)) &&
//         !numbers.includes(element) &&
//         !chars.includes(element)
//     ) ||
//     inValue.split('').some(element =>
//         !(alphaDown.includes(element) || alphaUp.includes(element)) &&
//         numbers.includes(element) &&
//         !chars.includes(element)
//     ) ||
//     inValue.split('').some(element =>
//         !(alphaDown.includes(element) || alphaUp.includes(element)) &&
//         !numbers.includes(element) &&
//         chars.includes(element)
//     )    ) 
//             {
//                 first.style.background = 'red';
//                 second.style.background ='white';
//                 third.style.background = 'white';
//                 para.style.color = 'red';
//                 para.textContent = "Your Password Is Too Weak"
//             }
//             else if(    
//                 inValue.split('').some(element =>
//                 (alphaDown.includes(element) || alphaUp.includes(element)) &&
//                 numbers.includes(element) &&
//                 !chars.includes(element)
//             ) ||
//             inValue.split('').some(element =>
//                 (alphaDown.includes(element) || alphaUp.includes(element)) &&
//                 !numbers.includes(element) &&
//                 chars.includes(element)
//             ) ||
//             inValue.split('').some(element =>
//                 !(alphaDown.includes(element) || alphaUp.includes(element)) &&
//                 numbers.includes(element) &&
//                 chars.includes(element)
//             )
//             ){
//                 first.style.background = 'yellow';
//                 second.style.background ='yellow';
//                 third.style.background = 'white';
//                 para.style.color = 'yellow';
//                 para.textContent = 'Your Password Is Medium Level'
//             }
//             else if(
//                 inValue.split('').some(element =>
//                     (alphaDown.includes(element) || alphaUp.includes(element)) &&
//                     numbers.includes(element) &&
//                     chars.includes(element)
//                 )
//             ){
//                 first.style.background = 'green';
//                 second.style.background ='green';
//                 third.style.background = 'green';
//                 para.style.color = 'green';
//                 para.textContent = 'Your Password Is Strong'

//             }else if(inValue.length === 0){
//                 first.style.background = 'white';
//                 second.style.background ='white';
//                 third.style.background = 'white';
//                 para.style.color = 'white';
//                 para.textContent = 'Enter Your Password'
//             }
//     });
    



    inp.addEventListener('input', () => {
        const inValue = inp.value;
        const hasAlpha = inValue.split('').some(element => alphaDown.includes(element) || alphaUp.includes(element));
        const hasNumber = inValue.split('').some(element => numbers.includes(element));
        const hasChar = inValue.split('').some(element => chars.includes(element));
    
        if (inValue.length < 5 || (hasAlpha && !hasNumber && !hasChar)) {
            first.style.background = 'red';
            second.style.background ='white';
            third.style.background = 'white';
            para.style.color = 'red';
            para.textContent = "Your Password Is Too Weak"

        } else if (
        (hasAlpha && hasNumber && !hasChar) ||
        (hasAlpha && !hasNumber && hasChar) ||
        (!hasAlpha && hasNumber && hasChar)) {
            first.style.background = 'yellow';
            second.style.background ='yellow';
            third.style.background = 'white';
            para.style.color = 'yellow';
            para.textContent = 'Your Password Is Medium Level'

        } else if (hasAlpha && hasNumber && hasChar) {
            first.style.background = 'green';
            second.style.background ='green';
            third.style.background = 'green';
            para.style.color = 'green';
            para.textContent = 'Your Password Is Strong'

        } 
        if (inValue === '') {
            first.style.background = 'white';
            second.style.background ='white';
            third.style.background = 'white';
            para.style.color = 'white';
            para.textContent = 'Enter Your Password'
        }
    });
    
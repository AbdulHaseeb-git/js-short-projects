const input = document.querySelector("input");
const buttons = document.querySelectorAll("button"); 

input.addEventListener('click',clearText);
input.addEventListener('keydown',function (e){
    e.preventDefault();
})

function clearText(event){
    if(input.value === "0")
    input.value = "";
}
buttons.forEach(button => {

    button.addEventListener('click',function(){

        if(button.innerText === "C"){
            input.value = "0";
        }
        else if(button.innerText === "="){
            let expression = input.value;
            try {
                let result = eval(expression);
                input.value = result;
              } catch (error) {
                // Handle any errors in the expression
                input.value = "Error";
              }        }
        else{
            let text = button.innerText;
            if(input.value == "0"){
                input.value = "";
            }
            input.value = input.value + text;    
        }

    });
});

let number1 = 0 
let number2 = 0
let operator = ""; 
const digits = document.querySelectorAll(".digit")
const clearBtn = document.querySelector("#clear")
const equal = document.querySelector("#equalBtn")
let displayValue = 0

digits.forEach(button => {
    button.addEventListener('click',() => {
         const number = button.dataset.number;
         addNumber(number);
    })
})

function addNumber(number){
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}
clearBtn.addEventListener('click', clear)

 function updateDisplay(){
    display.textContent = displayValue
}
equal.addEventListener('click', () =>{
    operate(displayValue,operator,displayValue)
})

addBtn.addEventListener('click', () => {
    operator = "+";
    
})



oneBtn.addEventListener('click',() => {
    displayValue = 1;
    updateDisplay();
})

function clear() {
    display.textContent = "0";
}

function add(a,b){
     
    return a+b;
}

function subtract(a,b){
    
    return a-b;
}

function multiply(a,b){
    
    return a*b;
}

function divide(a,b){
    
    return a/b;
}


function operate(a,operator,a){
    switch(operator){
        case "+": 
            return add(a,a)
           
        case "-": 
            return subtract(a,b)
            
        case "*":
            return multiply(a,b)
            
        case "/":
            return divide(a,b)
    }
    
}









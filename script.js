let previousValue = "";
let currentValue = "";
let operator = ""; 
let currentDisplay = document.querySelector(".current")
let previousDisplay = document.querySelector(".previous")

const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operaBtn")

const clearBtn = document.querySelector("#clear")
const equal = document.querySelector("#equalBtn")

const addBtn = document.querySelector("#addBtn")
const subBtn = document.querySelector("#subBtn")
const mulBtn = document.querySelector("#multBtn")
const diviBtn = document.querySelector("#diviBtn")


/*equal.addEventListener('click', () =>{
    currentValue = operate(previousValue,operator,currentValue)
    previousDisplay.textContent = "0";
    currentDisplay.textContent = currentValue;
})

function clearDisplay() {
    previousValue = "";
    currentValue = "";
    operator = "";
    currentDisplay.textContent = "0";
    previousDisplay.textContent = currentValue;
}*/
   

/*
    ---EVENT LISTENERS---
*/
digits.forEach(number => number.addEventListener('click', function() {
    appendNumber(number.textContent)
}))

operators.forEach(op => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent)
    updatePreviousDisplay()
}))

equal.addEventListener('click', () => {
    currentValue = currentDisplay.textContent;
    currentDisplay.textContent = operate(previousValue, operator, currentValue)
    updateDisplayAfterEqual()
})

/*
    ---FUNCTIONS---
*/
function appendNumber(num){
    if (currentValue.length <= 10){
        currentValue += num
    }
    currentDisplay.textContent = currentValue;
}

/*
    When we click on the operator, it stores the value of the operation into operator var
    It also stores the value of currentValue into previousValue and resets the currentValue value
*/
function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function updateDisplayAfterEqual() {
    updatePreviousDisplay();
    previousDisplay.textContent += " " + currentValue + " ="
}

function updatePreviousDisplay() {
    previousDisplay.textContent = previousValue +" "+ operator;
}

function add(previousValue,currentValue){
    return previousValue += currentValue; 
}

function subtract(previousValue,currentValue){
    return previousValue -= currentValue;
}

function multiply(previousValue,currentValue){
    return previousValue *= currentValue;
}

function divide(previousValue,currentValue){
    return previousValue /= currentValue;
}

function operate(previousValue,operator,currentValue){
    previousValue = Number(previousValue);
    currentValue =  Number(currentValue)
    switch(operator){
        case "+": 
            console.log("DEBUG: Add operation")
            return add(previousValue,currentValue);
        case "-": 
            return subtract(previousValue,currentValue)
        case "*":
            return multiply(previousValue,currentValue)   
        case "/":
            return divide(previousValue,currentValue)
    }
}
/*digits.forEach((number) => number.addEventListener('click', function(){
        console.log(currentDisplay.textContent.toString())
        currentValue += currentDisplay.textContent.toString() 
        appendNumber()
        console.log(currentValue)
    }))*/


/*operators.forEach(op => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousDisplay.textContent = previousValue +" "+ operator;
        //currentDisplay.textContent = currentValue;
    }))*/








/*function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}*/

//clearBtn.addEventListener('click', clearDisplay)



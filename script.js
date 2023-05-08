let previousValue = "";
let currentValue = "";
let operator = null; 
let currentDisplay = document.querySelector(".current")
let previousDisplay = document.querySelector(".previous")
let clearCurrDisplay = false

const digits = document.querySelectorAll(".digit")
const operators = document.querySelectorAll(".operaBtn")
const dot = document.querySelector("#decimal")

const backSpace = document.querySelector("#backSpace")
const clearBtn = document.querySelector("#clear")
const equal = document.querySelector("#equalBtn")

const addBtn = document.querySelector("#addBtn")
const subBtn = document.querySelector("#subBtn")
const mulBtn = document.querySelector("#multBtn")
const diviBtn = document.querySelector("#diviBtn")

currentDisplay.textContent = "0";
/*
    ---EVENT LISTENERS---
*/
digits.forEach(number => number.addEventListener('click', function() {
    appendNumber(number.textContent)
}))

operators.forEach(op => op.addEventListener('click', function(e) {
    calculate()
    
    handleOperator(e.target.textContent)

    previousValue = currentDisplay.textContent;

    previousDisplay.textContent = `${previousValue} ${operator}`
}))

equal.addEventListener('click', () => {
    currentValue = currentDisplay.textContent;
    currentDisplay.textContent = operate(previousValue, operator, currentValue)
    updateDisplayAfterEqual()
})

clearBtn.addEventListener('click', clearDisplay)

dot.addEventListener('click', () =>  {
    if(currentDisplay.textContent.includes(".")) return;
    currentDisplay.textContent += ".";
})

backSpace.addEventListener('click', () =>  deleteLastDigit())
    
/*
    ---FUNCTIONS---
*/
function deleteLastDigit(){
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}
function appendNumber(num){
    if(currentDisplay.textContent === "0" || clearCurrDisplay) resetCurrentDisplay()

    if (currentDisplay.textContent.length <= 10){
        currentDisplay.textContent += num
    }
}

function updateDisplayAfterEqual() {
    updatePreviousDisplay();
    previousDisplay.textContent += " " + currentValue + " ="
    clearCurrDisplay = true
}

function updatePreviousDisplay() {
    previousDisplay.textContent = previousValue +" "+ operator;
}

function handleOperator(op) {
    operator = op;
    clearCurrDisplay = true
}

function calculate() {
    if(operator === null || clearCurrDisplay) return;

    currentValue = currentDisplay.textContent;
    currentDisplay.textContent = operate(previousValue, operator, currentValue)

    operator = null;
}

function resetCurrentDisplay() {
    currentDisplay.textContent = "";
    clearCurrDisplay = false
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
            if(previousValue || currentValue === 0){
                alert("Can't divide by 0!")
                clearDisplay()
            }else return divide(previousValue,currentValue)
    }
}

function clearDisplay() {
    previousValue = "";
    currentValue = "";
    operator = null;
    currentDisplay.textContent = "0";
    previousDisplay.textContent = currentValue;
}





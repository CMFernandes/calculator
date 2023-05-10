let previousValue = "";
let currentValue = "";
let operator = null; 
let currentDisplay = document.querySelector(".current");
let previousDisplay = document.querySelector(".previous");
let clearCurrDisplay = false;

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operaBtn");
const dot = document.querySelector("#decimal");
const plusMinus = document.querySelector("#plusMinus");
const percent = document.querySelector("#percent");

const backSpace = document.querySelector("#backSpace");
const clearBtn = document.querySelector("#clear");
const equal = document.querySelector("#equalBtn");

const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const mulBtn = document.querySelector("#multBtn");
const diviBtn = document.querySelector("#diviBtn");

currentDisplay.textContent = "0";

document.addEventListener('keydown', handleKeyPress)

digits.forEach(number => number.addEventListener('click', function() {
    appendNumber(number.textContent);
}))

operators.forEach(op => op.addEventListener('click', function(e) {
    calculate()
    handleOperator(e.target.textContent);
    previousValue = currentDisplay.textContent;
    previousDisplay.textContent = `${previousValue} ${operator}`
}))

equal.addEventListener('click', equalOperation)

clearBtn.addEventListener('click', clearDisplay)

dot.addEventListener('click',appendDot)

backSpace.addEventListener('click', () =>  deleteLastDigit())
    
plusMinus.addEventListener('click', () => {
    currentDisplay.textContent *= -1 ;
})

percent.addEventListener('click', () =>{
    currentDisplay.textContent /= 100;
})

function handleKeyPress(event) {
    const key = event.key;
  
    if (/\d/.test(key)) {
      // Handle digit key
      appendNumber(key);
    } else if (/[+\-*/]/.test(key)) {
      // Handle operator key
      calculate();
      handleOperator(key);
      previousValue = currentDisplay.textContent;
      updatePreviousDisplay();
    } else if (key === '.') {
      // Handle dot key
      appendDot();
    } else if (key === '%') {
      // Handle percent key
      percentFunc();
    } else if (key === '-') {
      // Handle plus/minus key
      plusMinusFunc();
    } else if (key === 'Backspace') {
      // Handle backspace key
      deleteLastDigit();
    } else if (key === 'Enter') {
        console.log("Enter key press")
      // Handle enter key
      equalOperation();
    } else if (key === 'Escape') {
      // Handle escape key
      clearDisplay();
    }
}

function equalOperation(){
    if(previousDisplay.textContent === ""){
        return
    }
    currentValue = currentDisplay.textContent;
    currentDisplay.textContent = Math.round(operate(previousValue, operator, currentValue) * 100) / 100
    
    updateDisplayAfterEqual()
   
}
function appendDot(){
    if(currentDisplay.textContent.includes(".")) return;
    currentDisplay.textContent += ".";
}
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
    if(operator === null || clearCurrDisplay || previousValue === NaN || currentValue === NaN) return;

    currentValue = currentDisplay.textContent;
    currentDisplay.textContent = Math.round(operate(previousValue, operator, currentValue) * 100) / 100

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
            return add(previousValue,currentValue);
        case "-": 
            return subtract(previousValue,currentValue)
        case "*":
            return multiply(previousValue,currentValue)   
        case "/":
            if(previousValue === 0 || currentValue === 0){
                alert("Can't divide by 0!")
                clearDisplay()
                return;
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





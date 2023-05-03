let a = 0
let b = 0
let operator = ""; 
let res = 0
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


function operate(a,operator,b){
    switch(operator){
        case "+": 
            return add(a,b)
           
        case "-": 
            return subtract(a,b)
            
        case "*":
            return multiply(a,b)
            
        case "/":
            return divide(a,b)
    }
    
}









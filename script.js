function add(s1, s2){
    if (isNaN(s1 + s2)){
        return NaN;
    }
    return s1 + s2;
}

function subtract(s1, s2){
    if (isNaN(s1 - s2)){
        return NaN;
    }
    return s1 - s2;
}

function multiply(s1, s2){
    if (isNaN(s1 * s2)){
        return NaN;
    }
    return s1 * s2;
}

function divide(s1, s2){
    if (isNaN(s1 / s2)){
        return NaN;
    }
    return s1 / s2;
}

function operate(s1, s2, op){
    switch(op){
        case "+":
            return add(s1, s2);
        case "-":
            return subtract(s1, s2);
        case "*":
            return multiply(s1, s2);
        case "/":
            return divide(s1, s2);         
    }    
}

const display = document.getElementById("display");

let displayValue = display.innerHTML;

function addButtonListenerNumber(id, value){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        displayValue += value;
        display.innerHTML = displayValue;
    });
}

addButtonListenerNumber("one", 1);
addButtonListenerNumber("two", 2);
addButtonListenerNumber("three", 3);
addButtonListenerNumber("four", 4);
addButtonListenerNumber("five", 5);
addButtonListenerNumber("six", 6);
addButtonListenerNumber("seven", 7);
addButtonListenerNumber("eight", 8);
addButtonListenerNumber("nine", 9);
addButtonListenerNumber("zero", 0);
addButtonListenerNumber("plus", "+");
addButtonListenerNumber("minus", "-");
addButtonListenerNumber("multiply", "*");
addButtonListenerNumber("divide", "/");

const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    displayValue = "";
    display.innerHTML = displayValue;
});
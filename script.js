function add(s1, s2){
    if (isNaN(+s1 + +s2)){
        return NaN;
    }
    return +s1 + +s2;
}

function subtract(s1, s2){
    if (isNaN(+s1 - +s2)){
        return NaN;
    }
    return +s1 - +s2;
}

function multiply(s1, s2){
    if (isNaN(+s1 * +s2)){
        return NaN;
    }
    return +s1 * +s2;
}

function divide(s1, s2){
    if(+s2 === 0){
        return "haha...";
    }
    if (isNaN(+s1 / +s2)){
        return NaN;
    }
    return +s1 / +s2;
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
        default:
            return "Clear, then enter."         
    }    
}

const display = document.getElementById("display");

let displayValue = display.innerHTML;

document.getElementById("plus").disabled = true;
document.getElementById("multiply").disabled = true;
document.getElementById("divide").disabled = true;

function addButtonListenerNumber(id, value){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        displayValue += value;
        display.innerHTML = displayValue;
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false; //how to use negative numbers?
        document.getElementById("multiply").disabled = false;
        document.getElementById("divide").disabled = false;
    });
}

function addButtonListenerOperator(id, value){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        const oldValue = displayValue;
        displayValue += value;
        display.innerHTML = displayValue;
        document.getElementById("plus").disabled = true;
        //document.getElementById("minus").disabled = true; 
        //how to use negative numbers?
        document.getElementById("multiply").disabled = true;
        document.getElementById("divide").disabled = true;
    })
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

addButtonListenerOperator("plus", "+");
addButtonListenerOperator("minus", "-");
addButtonListenerOperator("multiply", "*");
addButtonListenerOperator("divide", "/");

const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    displayValue = "";
    display.innerHTML = displayValue;
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
});

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.innerHTML = displayValue;
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(){
    displayValue += ".";
    display.innerHTML = displayValue;
    //How to control usage of decimals?
})

const equals = document.getElementById("equals");
equals.addEventListener("click", function(){
    let op;
    let operatorLocation;
    for(let i = 0; i < displayValue.length; i++){
        switch (displayValue.charAt(i)){
            case "+":
                op = "+";
                operatorLocation = i;
                break;
            case "-":
                if(!isNaN(displayValue.charAt(i+1)) && (i === 0 || !isNaN(displayValue.charAt(i-1)))){
                    op = "-";
                    operatorLocation = i; //to differentiate between - as an operator and negative numbers
                }
                break;    
            case "*":
                op = "*";
                operatorLocation = i;
                break;
            case "/":
                op = "/";
                operatorLocation = i;
                break;                            
        }
    }
    const s1 = displayValue.substring(0, operatorLocation);
    const s2 = displayValue.substring(operatorLocation + 1);
    display.innerHTML = operate(s1, s2, op);
    displayValue = display.innerHTML;
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("multiply").disabled = false;
    document.getElementById("divide").disabled = false;
});
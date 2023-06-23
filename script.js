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

let operatorIsGiven = false;
let decimalIsGiven = false;

document.getElementById("plus").disabled = true;
document.getElementById("multiply").disabled = true;
document.getElementById("divide").disabled = true;
document.getElementById("decimal").disabled = true;

function addButtonListenerNumber(id, value){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        displayValue += value;
        display.innerHTML = displayValue;
        if(!operatorIsGiven){
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false; 
            document.getElementById("multiply").disabled = false;
            document.getElementById("divide").disabled = false;
        }else{
            document.getElementById("minus").disabled = true; 
        }
        if(!decimalIsGiven){
            document.getElementById("decimal").disabled = false;
        }
    });
}

function addButtonListenerOperator(id, value){
    const btn = document.getElementById(id);
    btn.addEventListener("click", function(){
        if(!(displayValue.charAt(displayValue.length - 1) === ".")){
            const oldValue = displayValue;
            displayValue += value;
            display.innerHTML = displayValue;
            document.getElementById("plus").disabled = true;
            document.getElementById("multiply").disabled = true;
            document.getElementById("divide").disabled = true;
            document.getElementById("decimal").disabled = true;
            decimalIsGiven = false;
            operatorIsGiven = true;
        }
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
addButtonListenerOperator("multiply", "*");
addButtonListenerOperator("divide", "/");

const minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    if(operatorIsGiven){
        minus.disabled = true;
    }
    if(displayValue === "" || displayValue.charAt(displayValue.length - 1) === "+"  || displayValue.charAt(displayValue.length - 1) === "*" || displayValue.charAt(displayValue.length - 1) === "/"){
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("multiply").disabled = true;
        document.getElementById("divide").disabled = true;
        document.getElementById("decimal").disabled = true;
    }
    if(!((displayValue.charAt(displayValue.length - 1) === "."))){
        displayValue += "-";
        display.innerHTML = displayValue;
        operatorIsGiven = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("multiply").disabled = true;
        document.getElementById("divide").disabled = true;
        document.getElementById("decimal").disabled = true;
    } //need to differentiate betwwen - as an operator and a sign
})

const clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    displayValue = "";
    display.innerHTML = displayValue;

    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.getElementById("zero").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("equals").disabled = false;
    document.getElementById("backspace").disabled = false;
    document.getElementById("plus").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("decimal").disabled = true;

    decimalIsGiven = false;
    operatorIsGiven = false;
});

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function(){
    if(displayValue === ""){
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = false;
        document.getElementById("multiply").disabled = true;
        document.getElementById("divide").disabled = true;
        document.getElementById("decimal").disabled = true;
    }else if(displayValue.charAt(displayValue.length - 1) === "."){
        document.getElementById("decimal").disabled = false;
    }
    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.innerHTML = displayValue;
    //button behaviour needs to be reviewed for backspace
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(){
    displayValue += ".";
    display.innerHTML = displayValue;
    decimal.disabled = true;
    decimalIsGiven = true;
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
    result = operate(s1, s2, op);
    if(!isNaN(result)){
        result = parseFloat(result.toFixed(4));
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("multiply").disabled = false;
        document.getElementById("divide").disabled = false;
    }else{
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("multiply").disabled = true;
        document.getElementById("divide").disabled = true;
        document.getElementById("decimal").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("four").disabled = true;
        document.getElementById("five").disabled = true;
        document.getElementById("six").disabled = true;
        document.getElementById("seven").disabled = true;
        document.getElementById("eight").disabled = true;
        document.getElementById("nine").disabled = true;
        document.getElementById("zero").disabled = true;
        document.getElementById("equals").disabled = true;
        document.getElementById("backspace").disabled = true;
    }
    display.innerHTML = result;
    displayValue = display.innerHTML;
});
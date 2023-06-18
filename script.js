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
const display = document.getElementById("display");
const operators = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");

let currentValue = "";
let num1;
let num2;
let operator;

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        const digit = num.textContent;
        currentValue += digit;
        display.value = currentValue;
    })
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        num1 = Number(currentValue);
        currentValue =  "";
        display.value = operator;
    })
});

equal.addEventListener("click", () => {
    num2 = Number(currentValue);
    const result = operate(num1, operator, num2);
    display.value = result;
});

function add(a, b) {
    return(a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed."
    } else {
        return (a / b);
    }
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
    else {
        return "Invalid operator. Please use +, -, *, or /.";
    }
}
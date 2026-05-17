// Get references to HTML elements
const display = document.getElementById("display");
const operators = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const sqrt = document.querySelector(".sqrt");

let currentValue = "";
let num1;
let num2;
let operator;

numbers.forEach(num => {
    num.addEventListener("click", () => {
        const digit = num.textContent;  // Get the clicked digit
        if (currentValue === "0" && digit !== ".") {
            currentValue = digit;
        } else {
            currentValue += digit;
        }
        display.value = currentValue;
    });
});

operators.forEach(op => {
    op.addEventListener("click", () => {
        num1 = Number(currentValue);
        operator = op.textContent;
        currentValue = ""; // Reset for second number input
        display.value = num1 + " " + operator;
    });
});

equal.addEventListener("click", () => {
    let result;
    if (operator === "sqrt") {
        // Sqrt is handled immediately in its click listener, 
        // but if we want it to work with equals:
        result = Math.sqrt(Number(currentValue));
    } else {
        num2 = Number(currentValue);
        result = operate(num1, operator, num2);
    }

    display.value = result;
    currentValue = result.toString();
    num1 = result;
    operator = null;
})

clear.addEventListener("click", () => {
    currentValue = "";
    num1 = null;
    num2 = null;
    operator = null;
    display.value = "";
})

backspace.addEventListener("click", () => {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
})

sqrt.addEventListener("click", () => {
    if (currentValue === "") return;

    const numericValue = Number(currentValue);
    if (numericValue < 0) {
        display.value = "Error: Negative input";
        currentValue = "";
        return;
    }

    const result = Math.sqrt(numericValue);
    display.value = result;
    currentValue = result.toString();
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

function modulus(a, b) {
    return (a % b);
}

// A function that takes two numbers and an operator, and performs the corresponding operation
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
    else if (operator === "%") {
        return modulus(num1, num2);
    }
    else {
        return "Invalid operator. Please use +, -, *, or /.";
    }
}
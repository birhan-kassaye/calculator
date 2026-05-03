// Get references to HTML elements
const display = document.getElementById("display");
const operators = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let currentValue = "";
let num1;
let num2;
let operator;

numbers.forEach(num => {
    num.addEventListener("click", () => {
        const digit = num.textContent;  // Get the clicked digit
        if (currentValue === "0") {
            currentValue += digit;
            display.value = currentValue;
        } else {
            currentValue += digit;
            display.value = currentValue;
            // Extract the second number from the string (e.g., "5+3" -> "3")
            num2 = Number(currentValue.split(operator)[1]);
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", () => {
        num1 = Number(currentValue);
        operator = op.textContent;
        currentValue += operator;
        display.value = currentValue;
    });
});

equal.addEventListener("click", () => {
    const result = operate(num1, operator, num2);
    display.value = result;
})

clear.addEventListener("click", () => {
    currentValue = "";
    num1 = null;
    num2 = null;
    operator = null;
    display.value = "";
})

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
    else {
        return "Invalid operator. Please use +, -, *, or /.";
    }
}
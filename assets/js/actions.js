/*
Developer: Antonio Aviles
Date: 06/06/2024
Github: AntonioEAB
*/

let inputs = document.querySelectorAll("input[type='button']");
let display = document.getElementById('number');

inputs.forEach(input => {
    input.addEventListener("click", event => {
        let inputValue = event.target.value;

        if (inputValue === '=') {
            evaluate();
        } else if (inputValue === 'CE') {
            clearDisplay();
        } else {
            appendToDisplay(inputValue);
        }
    });
});



function evaluate() {
    const expression = display.value.trim();

    // Verifica si la entrada es una expresión aritmética válida
    if (isArithmeticExpression(expression)) {
        try {
            const result = eval(expression);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value = 'Expresión inválida';
    }
}

function isArithmeticExpression(expression) {
    // Expresión regular para validar una expresión aritmética
    const arithmeticExpression = /^[\d\s\+\-\*\/\(\)\.]+$/;
    return arithmeticExpression.test(expression);
}

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

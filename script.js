let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' || /[\+\-\*\/]$/.test(currentInput)) return;
    currentInput += operator;
    display.innerText = currentInput;
}

function calculate() {
    try {
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}

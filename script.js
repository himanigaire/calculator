let display = document.getElementById('display');

// Append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    display.value += operator;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error, Check the input';
    }
}

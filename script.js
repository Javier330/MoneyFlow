// Este archivo sigue igual porque la funcionalidad no cambia.
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

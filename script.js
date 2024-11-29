function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to calculate the expression
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check for number keys and operator keys
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission if inside a form
        calculate(); // Call the calculate function
    } else if (key === 'Backspace') {
        clearDisplay(); // Clear display on Backspace
    } else if (key === 'Escape') {
        clearDisplay(); // Clear display on Escape
    }
});

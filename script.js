let secondary_arg = 0;
let display_arg = 0;
let operator = -1;
const display_div = document.getElementById("display");

function updateDisplay() {
    display_div.innerText = display_arg;
}

function button_num(e) {
    display_arg = display_arg * 10 + Number(e.target.innerText);
    updateDisplay();
}

function button_operator(e) {
    let op = e.target.innerText;
    if (op === "=") {
        operate();
        operator = -1;
        return;
    }

    operate();
    if (op === "+") {
        operator = 1;
    } else if (op === "-") {
        operator = 2;
    } else if (op === "*") {
        operator = 3;
    } else if (op === "/") {
        operator = 4;
    }

    secondary_arg = display_arg;
    display_arg = 0;
}

function button_function(e) {
    let target = e.target.innerText;
    if (target === "AC") {
        display_arg = 0;
        secondary_arg = 0;
        operator = -1;
        updateDisplay();
    }
    if (target === "+/-") {
        display_arg = display_arg * -1;
        updateDisplay();
    }
    if (target === "%") {
        display_arg = display_arg / 100;
        updateDisplay();
    }
}

function operate() {
    if (operator === -1) {
        return;
    }


    if (operator === 1) {
        display_arg = secondary_arg + display_arg;
    } else if (operator === 2) {
        display_arg = secondary_arg - display_arg;
    } else if (operator === 3) {
        display_arg = secondary_arg * display_arg;
    } else if (operator === 4) {
        display_arg = secondary_arg / display_arg;
    }
    updateDisplay();
}

function assign_values() {
    const number_buttons = document.querySelectorAll('.number');
    for (var i = 0; i < number_buttons.length; i++) {
        number_buttons[i].addEventListener("mousedown", button_num);
    }

    const operator_buttons = document.querySelectorAll('.operator');
    for (var i = 0; i < operator_buttons.length; i++) {
        operator_buttons[i].addEventListener("mousedown", button_operator);
    }

    const function_buttons = document.querySelectorAll('.function');
    for (var i = 0; i < function_buttons.length; i++) {
        function_buttons[i].addEventListener("mousedown", button_function);
    }
}



assign_values();
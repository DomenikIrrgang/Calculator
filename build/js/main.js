"use strict";

var _calculator = require("./calculator.js");

var calculator = new _calculator.Calculator();

var buttonBindings = {
    clear: clearDisplay,
    calculate: calculateResult,
    back: back,
    divide: valueButton,
    add: valueButton,
    subtract: valueButton,
    multiply: valueButton,
    dot: valueButton,
    openbracket: valueButton,
    closebracket: valueButton,
    one: valueButton,
    two: valueButton,
    three: valueButton,
    four: valueButton,
    five: valueButton,
    six: valueButton,
    seven: valueButton,
    eight: valueButton,
    nine: valueButton,
    zero: valueButton
};

window.addEventListener("load", function () {
    initBindings();
    calculator.init();
}, false);

function initBindings() {
    for (var binding in buttonBindings) {
        try {
            document.getElementById(binding).onclick = buttonBindings[binding];
        } catch (error) {
            console.log("unknown element: " + binding);
        }
    }
}

function valueButton(event) {
    calculator.display.writeOutput(calculator.display.readInput() + event.srcElement.value);
}

function clearDisplay() {
    calculator.display.clear();
}

function setMode(mode) {
    calculator.setMode(mode);
}

function calculateResult() {
    calculator.calculate();
}

function back() {
    calculator.display.reduce(1);
}
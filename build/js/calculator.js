"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Calculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _display = require("./display/display.js");

var _calculatormode = require("./mode/calculatormode.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = exports.Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);

        this.display = new _display.Display("display");
        this.defaultMode = _calculatormode.CalculatorModes.MOCK;
        this.result = "";
    }

    _createClass(Calculator, [{
        key: "setMode",
        value: function setMode(mode) {
            if (mode) {
                this.mode = mode;
                this.inputValidator = mode.inputValidator;
                this.display.setValidator(mode.displayValidator);
                this.evaluator = mode.evaluator;
            } else {
                console.error("Unknown calculator mode!");
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.setMode(this.defaultMode);
            this.display.init();
        }
    }, {
        key: "calculate",
        value: function calculate() {
            this.input = this.display.readInput();
            if (this.inputValidator.validate(this.input)) {
                this.result = this.evaluator.evaluate(this.input);
                this.display.writeOutput(this.result);
            } else {
                // Maybe exchange with error display.
                console.error("Invalid Input!");
            }
        }
    }]);

    return Calculator;
}();
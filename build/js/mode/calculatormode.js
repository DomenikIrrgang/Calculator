"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CalculatorModes = undefined;

var _mockdisplayvalidator = require("../display/mockdisplayvalidator.js");

var _mockinputvalidator = require("../validator/mockinputvalidator.js");

var _defaultEvaluator = require("../evaluator/defaultEvaluator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mode = function Mode(name, displayValidator, inputValidator, evaluator) {
    _classCallCheck(this, Mode);

    this.name = name;
    this.displayValidator = displayValidator;
    this.inputValidator = inputValidator;
    this.evaluator = evaluator;
};

var CalculatorModes = exports.CalculatorModes = Object.freeze({
    MOCK: new Mode("MOCK", new _mockdisplayvalidator.MockDisplayValidator(), new _mockinputvalidator.MockInputValidator(), new _defaultEvaluator.DefaultEvaluator())
});
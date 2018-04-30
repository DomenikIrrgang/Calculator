(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./display/display.js":2,"./mode/calculatormode.js":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Display = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockdisplayvalidator = require("./mockdisplayvalidator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = exports.Display = function () {
    function Display(elementId) {
        _classCallCheck(this, Display);

        this.elementId = elementId;
        this.validator = new _mockdisplayvalidator.MockDisplayValidator();
    }

    _createClass(Display, [{
        key: "readInput",
        value: function readInput() {
            return this.getElement().value;
        }
    }, {
        key: "writeOutput",
        value: function writeOutput(output) {
            this.getElement().value = output;
        }
    }, {
        key: "getElement",
        value: function getElement() {
            return document.getElementById(this.elementId);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.writeOutput("");
        }
    }, {
        key: "reduce",
        value: function reduce(amount) {
            this.writeOutput(this.readInput().slice(0, this.readInput().length - amount));
        }
    }, {
        key: "init",
        value: function init() {
            var _this = this;

            this.getElement().addEventListener("input", function (input) {
                if (input.inputType === "insertText") {
                    if (!_this.validator.validate(input.data)) {
                        _this.reduce(1);
                    }
                }
            });
        }
    }, {
        key: "setValidator",
        value: function setValidator(validator) {
            this.validator = validator;
        }
    }]);

    return Display;
}();
},{"./mockdisplayvalidator.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MockDisplayValidator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require("../validator/validator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MockDisplayValidator = exports.MockDisplayValidator = function (_Validator) {
    _inherits(MockDisplayValidator, _Validator);

    function MockDisplayValidator() {
        _classCallCheck(this, MockDisplayValidator);

        return _possibleConstructorReturn(this, (MockDisplayValidator.__proto__ || Object.getPrototypeOf(MockDisplayValidator)).apply(this, arguments));
    }

    _createClass(MockDisplayValidator, [{
        key: "validate",
        value: function validate(input) {
            return true;
        }
    }]);

    return MockDisplayValidator;
}(_validator.Validator);
},{"../validator/validator.js":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultEvaluator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _evaluator = require("./evaluator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultEvaluator = exports.DefaultEvaluator = function (_Evaluator) {
    _inherits(DefaultEvaluator, _Evaluator);

    function DefaultEvaluator() {
        _classCallCheck(this, DefaultEvaluator);

        return _possibleConstructorReturn(this, (DefaultEvaluator.__proto__ || Object.getPrototypeOf(DefaultEvaluator)).apply(this, arguments));
    }

    _createClass(DefaultEvaluator, [{
        key: "evaluate",
        value: function evaluate(input) {
            return eval(input);
        }
    }]);

    return DefaultEvaluator;
}(_evaluator.Evaluator);
},{"./evaluator.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Evaluator = exports.Evaluator = function () {
    function Evaluator() {
        _classCallCheck(this, Evaluator);

        if (new.target === Evaluator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.evaluate === undefined) {
            throw new TypeError("Must override evaluate method");
        }
    }

    _createClass(Evaluator, [{
        key: "validate",
        value: function validate() {
            throw new Error("Not implemented yet.");
        }
    }]);

    return Evaluator;
}();
},{}],6:[function(require,module,exports){
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
},{"./calculator.js":1}],7:[function(require,module,exports){
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
},{"../display/mockdisplayvalidator.js":3,"../evaluator/defaultEvaluator.js":4,"../validator/mockinputvalidator.js":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MockInputValidator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = require("./validator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MockInputValidator = exports.MockInputValidator = function (_Validator) {
    _inherits(MockInputValidator, _Validator);

    function MockInputValidator() {
        _classCallCheck(this, MockInputValidator);

        return _possibleConstructorReturn(this, (MockInputValidator.__proto__ || Object.getPrototypeOf(MockInputValidator)).apply(this, arguments));
    }

    _createClass(MockInputValidator, [{
        key: "validate",
        value: function validate(input) {
            return true;
        }
    }]);

    return MockInputValidator;
}(_validator.Validator);
},{"./validator.js":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = exports.Validator = function Validator() {
    _classCallCheck(this, Validator);

    if (new.target === Validator) {
        throw new TypeError("Cannot construct Abstract instances directly");
    }
    if (this.validate === undefined) {
        throw new TypeError("Must override validate method");
    }
};
},{}]},{},[6]);

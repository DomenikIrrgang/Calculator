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
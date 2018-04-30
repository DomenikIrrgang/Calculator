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
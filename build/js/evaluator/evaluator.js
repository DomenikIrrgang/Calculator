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
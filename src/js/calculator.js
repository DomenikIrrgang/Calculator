import { Display } from "./display/display.js";
import { CalculatorModes } from "./mode/calculatormode.js";

export class Calculator {

    constructor() {
        this.display = new Display("display");
        this.defaultMode = CalculatorModes.MOCK;
        this.result = "";
    }

    setMode(mode) {
        if (mode) {
            this.mode = mode;
            this.inputValidator = mode.inputValidator;
            this.display.setValidator(mode.displayValidator);
            this.evaluator = mode.evaluator;
        } else {
            console.error("Unknown calculator mode!");
        }
    }

    init() {
        this.setMode(this.defaultMode);
        this.display.init();
    }

    calculate() {
        this.input = this.display.readInput();
        if (this.inputValidator.validate(this.input)) {
            this.result = this.evaluator.evaluate(this.input);
            this.display.writeOutput(this.result);
        } else {
            // Maybe exchange with error display.
            console.error("Invalid Input!");
        }
    }
}
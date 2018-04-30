import { MockDisplayValidator } from "../display/mockdisplayvalidator.js";
import { MockInputValidator } from "../validator/mockinputvalidator.js";
import { DefaultEvaluator } from "../evaluator/defaultEvaluator.js";

class Mode {
    constructor(name, displayValidator, inputValidator, evaluator) {
        this.name = name;
        this.displayValidator = displayValidator;
        this.inputValidator = inputValidator;
        this.evaluator = evaluator;
    }
}

export const CalculatorModes = Object.freeze({
    MOCK: new Mode("MOCK", new MockDisplayValidator(), new MockInputValidator(), new DefaultEvaluator()),
});
import { Validator } from "./validator.js";

export class MockInputValidator extends Validator {
    validate(input) {
        return true;
    }
}
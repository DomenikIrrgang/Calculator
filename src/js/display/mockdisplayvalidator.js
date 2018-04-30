import { Validator } from "../validator/validator.js";

export class MockDisplayValidator extends Validator {
    validate(input) {
        return true;
    }
}
export class Validator {
    constructor() {
        if (new.target === Validator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.validate === undefined) {
            throw new TypeError("Must override validate method");
        }
    }
}
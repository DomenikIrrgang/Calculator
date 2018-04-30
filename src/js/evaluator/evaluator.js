export class Evaluator {
    constructor() {
        if (new.target === Evaluator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.evaluate === undefined) {
            throw new TypeError("Must override evaluate method");
        }
    }

    validate() {
        throw new Error("Not implemented yet.");
    }
}
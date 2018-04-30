import { MockDisplayValidator } from "./mockdisplayvalidator.js";

export class Display {
    constructor(elementId) {
        this.elementId = elementId;
        this.validator = new MockDisplayValidator();
    }

    readInput() {
        return this.getElement().value;
    }
    
    writeOutput(output) {
        this.getElement().value = output;
    }

    getElement() {
        return document.getElementById(this.elementId);
    }
    
    clear() {
        this.writeOutput("");
    }
    
    reduce(amount) {
        this.writeOutput(this.readInput().slice(0, this.readInput().length - amount));
    }
    
    init() {
        this.getElement().addEventListener("input", (input) => {
            if (input.inputType === "insertText") {
                if (!this.validator.validate(input.data)) {
                    this.reduce(1);
                }
            }
        });
    }

    setValidator(validator) {
        this.validator = validator;
    }
}
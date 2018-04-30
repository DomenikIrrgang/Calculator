import { Evaluator } from "./evaluator.js";

export class DefaultEvaluator extends Evaluator {
    evaluate(input) {
        return eval(input);
    }
}
import { CalculatorBuilder } from "./CalculatorBuilder";
import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights";
import { CalculatorHelper } from "../helpers/CalculatorHelper";

export class PoundCalculatorBuilder implements CalculatorBuilder {
    input: CalculatorInput;
    weights: PoundWeights;

    constructor(public helper: CalculatorHelper) { }

    public usingCalculatorInput(calculatorInput: CalculatorInput): CalculatorBuilder {
        this.input = calculatorInput;

        return this;
    }

    public usingPoundWeights(weights: PoundWeights): CalculatorBuilder {
        this.weights = weights;

        return this;
    }

    public build(): CalculatorOutput {
        return this.helper.toCalculatorOutput(this.input, this.weights);
    }
}
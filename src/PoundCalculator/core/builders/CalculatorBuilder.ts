import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights-Constants";
import { CalculatorHelper } from "../helpers/CalculatorHelper";

export interface CalculatorBuilder {
    input: CalculatorInput;
    weights: PoundWeights[];
    helper: CalculatorHelper;

    usingCalculatorInput(calculatorInput: CalculatorInput): CalculatorBuilder;
    usingPoundWeights(weights: PoundWeights[]): CalculatorBuilder;
    build(): CalculatorOutput;
}
import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights";

export interface CalculatorBuilder {
    input: CalculatorInput;
    weights: PoundWeights;

    create(): CalculatorBuilder;
    usingCalculatorInput(calculatorInput: CalculatorInput): CalculatorBuilder;
    usingPoundWeights(weights: PoundWeights): CalculatorBuilder;
    build(): CalculatorOutput;
}
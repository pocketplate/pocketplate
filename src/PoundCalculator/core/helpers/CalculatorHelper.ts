import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights";

export interface CalculatorHelper {
    toCalculatorOutput(inputs: CalculatorInput, weights: PoundWeights): CalculatorOutput;
}
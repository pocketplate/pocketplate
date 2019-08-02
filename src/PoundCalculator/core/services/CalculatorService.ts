import { CalculatorBuilder } from "../builders/CalculatorBuilder";
import { CalculatorInput } from "../models/CalculatorInput";
import { CalculatorOutput } from "../models/CalculatorOutput";

export interface CalculatorService {
    calculatorBuilder: CalculatorBuilder;
    compute(input: CalculatorInput): CalculatorOutput;
}
import { CalculatorInput } from "../models/CalculatorInput";
import { CalculatorBuilder } from "../builders/CalculatorBuilder";
import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorService } from "./CalculatorService";

export class PoundCalculatorService implements CalculatorService {
    calculatorBuilder: CalculatorBuilder;

    constructor (calculatorBuilder: CalculatorBuilder) {
        this.calculatorBuilder = calculatorBuilder;
    }

    public compute(input: CalculatorInput): CalculatorOutput {
        throw new Error("Method not implemented.");
    }
}
import { CalculatorBuilder } from "./CalculatorBuilder";
import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights";

export class PoundCalculatorBuilder implements CalculatorBuilder {
    input: CalculatorInput;
    weights: PoundWeights;

    public create(): CalculatorBuilder {
        throw new Error("Method not implemented.");
    }

    public usingCalculatorInput(calculatorInput: CalculatorInput): CalculatorBuilder {
        throw new Error("Method not implemented.");
    }

    public usingPoundWeights(weights: PoundWeights): CalculatorBuilder {
        throw new Error("Method not implemented.");
    }

    public build(): CalculatorOutput {
        throw new Error("Method not implemented.");
    }
}
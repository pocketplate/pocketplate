import { CalculatorInput } from "../models/CalculatorInput";
import { CalculatorBuilder } from "../builders/CalculatorBuilder";
import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorService } from "./CalculatorService";
import { PoundWeights } from "../models/PoundWeights-Constants";

export class PoundCalculatorService implements CalculatorService {
    calculatorBuilder: CalculatorBuilder;

    constructor (calculatorBuilder: CalculatorBuilder) {
        this.calculatorBuilder = calculatorBuilder;
    }

    public compute(input: CalculatorInput): CalculatorOutput {
        const weights:PoundWeights[] = [PoundWeights.Biggest, PoundWeights.Bigger, PoundWeights.Big,
            PoundWeights.Normal,
            PoundWeights.Thin, PoundWeights.Thinner, PoundWeights.Thinniest];

        return this.calculatorBuilder
            .usingCalculatorInput(input)
            .usingPoundWeights(weights)
            .build();
    }
}
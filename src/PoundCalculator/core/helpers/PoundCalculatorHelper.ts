import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights";
import { CalculatorHelper } from "./CalculatorHelper";

export class PoundCalculatorHelper implements CalculatorHelper {
    public toCalculatorOutput(inputs: CalculatorInput, weights: PoundWeights): CalculatorOutput {
        let poundWeights = [];
        let totalPounds = 0;

        if (inputs && weights) {
            poundWeights = this.fromWeightsToArray(weights);
            totalPounds = inputs.weight;
        }

        return { plates: this.compute(totalPounds, poundWeights) };
    }

    private fromWeightsToArray(weights: PoundWeights): number[] {
        return [];
    }

    private compute(totalPounds: number, weights: number[]): number[] {
        return [];
    }
}
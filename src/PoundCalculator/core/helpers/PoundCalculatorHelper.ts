import { CalculatorOutput } from "../models/CalculatorOutput";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights-Constants";
import { CalculatorHelper } from "./CalculatorHelper";

export class PoundCalculatorHelper implements CalculatorHelper {
    public toCalculatorOutput(inputs: CalculatorInput, weights: PoundWeights[]): CalculatorOutput {
        let poundWeights: number[] = weights || [];
        let totalPounds = 0;
        let baseWeight = 0;

        if (inputs) {
            totalPounds = inputs.weight;
            baseWeight = inputs.barAndCollar || 0;
        }

        const plates = this.compute(totalPounds, poundWeights, baseWeight);

        return { frequencyOfPlates: plates, platesConfig: poundWeights };
    }

    private compute(totalPounds: number, weights: number[], baseWeight: number): number[] {
        const result = [];
        let realWeight = Math.round((Math.max(totalPounds - baseWeight, 0) / 2));
        let numberOfWeight: number;

        weights.map((weight: number) => {
            numberOfWeight = Math.round(Math.floor(realWeight / weight));
            result.push(numberOfWeight || 0);
            realWeight -= (numberOfWeight * weight);
        });

        return result;
    }
}
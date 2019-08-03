import { observable, action } from 'mobx';
import { PoundCalculatorFactory } from '../../core/factories/PoundCalculatorFactory';
import { CalculatorService } from '../../core/services/CalculatorService';
import { CalculatorInput } from '../../core/models/CalculatorInput';
import { CalculatorOutput } from '../../core/models/CalculatorOutput';

export interface CalculatorState {
    plates: number[],
    totalWeight: number
}

export class PoundCalculatorStore {
    calculator: CalculatorService;

    @observable
    poundCalculator: CalculatorState = {
        plates: [],
        totalWeight: 0
    }

    @action
    public reset() {
        this.poundCalculator = {
            plates: [],
            totalWeight: 0
        }
        this.calculator = PoundCalculatorFactory.generate();
    }

    @action
    public compute (totalWeight: number) {
        if (totalWeight > 0 && !!this.calculator) {

            const output = this.calculator.compute(this.fromTotalWeightToCalculatorInputs(totalWeight));

            this.poundCalculator.plates = this.fromCalculatorOutputToPlates(output);
            this.poundCalculator.totalWeight = totalWeight;
        }
    }

    private fromTotalWeightToCalculatorInputs(total: number): CalculatorInput {
        return {weight: total} as CalculatorInput;
    }

    private fromCalculatorOutputToPlates(output: CalculatorOutput): number[] {
        const plates: number[] = [];

        output.platesConfig.map((plate: number, index: number) => plates.push( ... Array(output.frequencyOfPlates[index]).fill(plate)));

        return plates;
    }
}
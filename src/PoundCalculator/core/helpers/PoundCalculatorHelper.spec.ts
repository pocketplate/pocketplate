import { PoundCalculatorHelper } from "./PoundCalculatorHelper";

let poundCalculatorHelper: PoundCalculatorHelper;

it('init without crashing', () => {
    expect(poundCalculatorHelper).not.toBe(null);
});

describe('when toCalculatorOutput', () => {
    it('given no inputs, then return values are empty', () => { });

    it('given no weights, then return values are empty', () => { });

    it('given inputs and weights, then return values are computed', () => { });
});
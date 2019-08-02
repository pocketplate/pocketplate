import { PoundCalculatorBuilder } from './PoundCalculatorBuilder';
import { CalculatorInput } from '../models/CalculatorInput';
import { PoundWeights } from '../models/PoundWeights';
import { PoundCalculatorHelper } from '../helpers/PoundCalculatorHelper';

let poundCalculatorBuilder: PoundCalculatorBuilder;
let helper: PoundCalculatorHelper;
let calculatorInput: CalculatorInput;
let weights: PoundWeights;
const A_DEFAULT_RESULT = {plates:[]};
const A_HELPER_RESULT = {plates:[1,2,3]}

beforeEach(() => {
    helper = new PoundCalculatorHelper();
    helper.toCalculatorOutput = () => A_DEFAULT_RESULT;
    poundCalculatorBuilder = new PoundCalculatorBuilder(helper);

    calculatorInput = { } as CalculatorInput;
    weights = { } as PoundWeights;
});

it('init without crashing', () => {
    expect(poundCalculatorBuilder).not.toBe(null);
});

describe('when usingCalculatorInput', () => {
    it('given calculatorInput, then builder inputs should be set', () => {
        poundCalculatorBuilder = poundCalculatorBuilder.usingCalculatorInput(calculatorInput);

        expect(poundCalculatorBuilder.input).toEqual(calculatorInput);
    });
});

describe('when usingPoundWeights', () => {
    it('given poundWeights, then builder weights should be set', () => {
        poundCalculatorBuilder = poundCalculatorBuilder.usingPoundWeights(weights);

        expect(poundCalculatorBuilder.weights).toEqual(weights);
    });
});

describe('when build', () => {
    it('given no inputs, then result should be empty', () => {
        const result = poundCalculatorBuilder.usingCalculatorInput(calculatorInput).build();

        expect(result).toEqual(A_DEFAULT_RESULT);
    });

    it('given no weights, then result should be empty', () => {
        const result = poundCalculatorBuilder.usingPoundWeights(weights).build();

        expect(result).toEqual(A_DEFAULT_RESULT);
    });

    it('given inputs and weights, then result should be set', () => {
        helper.toCalculatorOutput = () => A_HELPER_RESULT;

        const result = poundCalculatorBuilder.usingCalculatorInput(calculatorInput).usingPoundWeights(weights).build();

        expect(result).toEqual(A_HELPER_RESULT);
    });
});
import { PoundCalculatorHelper } from "./PoundCalculatorHelper";
import { CalculatorInput } from "../models/CalculatorInput";
import { PoundWeights } from "../models/PoundWeights-Constants";

let poundCalculatorHelper: PoundCalculatorHelper;
let AN_EMPTY_OUTPUT = [];
let AN_EMPTY_CALCULATOR_INPUT = {} as CalculatorInput;
let AN_EMPTY_WEIGHTS = [];

beforeEach(() => {
    poundCalculatorHelper = new PoundCalculatorHelper();
});

it('init without crashing', () => {
    expect(poundCalculatorHelper).not.toBe(null);
});

const A_WEIGHT_CONFIG = [PoundWeights.Biggest, PoundWeights.Bigger, PoundWeights.Big,
    PoundWeights.Normal,
    PoundWeights.Thin, PoundWeights.Thinner, PoundWeights.Thinniest];

describe('when toCalculatorOutput', () => {
    it('given no inputs, then return values are empty', () => {
        const result = poundCalculatorHelper.toCalculatorOutput(null, AN_EMPTY_WEIGHTS);

        expect(result.frequencyOfPlates).toEqual(AN_EMPTY_OUTPUT);
    });

    it('given weights, then platesConfig equals entry', () => {
        const result = poundCalculatorHelper.toCalculatorOutput(AN_EMPTY_CALCULATOR_INPUT, A_WEIGHT_CONFIG)

        expect(result.platesConfig).toEqual(A_WEIGHT_CONFIG);
    });

    it('given no weights, then return values are empty', () => {
        const result = poundCalculatorHelper.toCalculatorOutput(AN_EMPTY_CALCULATOR_INPUT, null)

        expect(result.platesConfig).toEqual(AN_EMPTY_OUTPUT);
    });
});

describe('when testing case edge', () => {
    it('given inputs and weights, then return values are computed', () => {
        const AN_INPUT = {weight: 360} as CalculatorInput;

        const result = poundCalculatorHelper.toCalculatorOutput(AN_INPUT, A_WEIGHT_CONFIG);

        expect(result.frequencyOfPlates).toEqual( [4, 0, 0, 0, 0, 0, 0] );
    });

    it('given inputs and weights, then return values are computed', () => {
        const AN_INPUT = {weight: 0} as CalculatorInput;

        const result = poundCalculatorHelper.toCalculatorOutput(AN_INPUT, A_WEIGHT_CONFIG);

        expect(result.frequencyOfPlates).toEqual( [0, 0, 0, 0, 0, 0, 0] );
    });

    it('given inputs and weights, then return values are computed', () => {
        const AN_INPUT = {weight: 405, barAndCollar: 45} as CalculatorInput;

        const result = poundCalculatorHelper.toCalculatorOutput(AN_INPUT, A_WEIGHT_CONFIG);

        expect(result.frequencyOfPlates).toEqual( [4, 0, 0, 0, 0, 0, 0] );
    });

    it('given inputs and weights, then return values are computed', () => {
        const AN_INPUT = {weight: 75, barAndCollar: 45} as CalculatorInput;

        const result = poundCalculatorHelper.toCalculatorOutput(AN_INPUT, A_WEIGHT_CONFIG);

        expect(result.frequencyOfPlates).toEqual( [0, 0, 0, 1, 0, 0, 0] );
    });
});
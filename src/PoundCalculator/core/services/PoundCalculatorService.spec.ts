import { PoundCalculatorService } from "./PoundCalculatorService";
import { PoundCalculatorBuilder } from "../builders/PoundCalculatorBuilder";
import { CalculatorInput } from "../models/CalculatorInput";

let builder: PoundCalculatorBuilder;
let poundCalculatorService: PoundCalculatorService;
const A_OUTPUT = {plates: []};
const A_CALCULATOR_INPUT = {} as CalculatorInput;

beforeEach(() => {
    builder = {} as PoundCalculatorBuilder;
    builder.usingCalculatorInput = jest.fn(() => builder);
    builder.usingPoundWeights = jest.fn(() => builder);
    builder.build = jest.fn(() => A_OUTPUT);

    poundCalculatorService = new PoundCalculatorService(builder);
});

it('init without crashing', () => {
    expect(poundCalculatorService).not.toBe(null);
});

describe('when compute', () => {
    it('then PoundCalculatorBuilder.usingCalculatorInput called once', () => {
        poundCalculatorService.compute(A_CALCULATOR_INPUT);

        expect(builder.usingCalculatorInput).toHaveBeenCalledTimes(1);
    });

    it('then PoundCalculatorBuilder.usingPoundWeights called once', () => {
        poundCalculatorService.compute(A_CALCULATOR_INPUT);

        expect(builder.usingPoundWeights).toHaveBeenCalledTimes(1);
    });

    it('then PoundCalculatorBuilder.build called once', () => {
        poundCalculatorService.compute(A_CALCULATOR_INPUT);

        expect(builder.build).toHaveBeenCalledTimes(1);
    });

    it('given inputs, then result called once', () => {
        const result = poundCalculatorService.compute(A_CALCULATOR_INPUT);

        expect(result).toEqual(A_OUTPUT);
    });
});
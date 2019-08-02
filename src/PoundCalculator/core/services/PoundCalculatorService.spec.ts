import { PoundCalculatorService } from "./PoundCalculatorService";
import { PoundCalculatorBuilder } from "../builders/PoundCalculatorBuilder";

let builder: PoundCalculatorBuilder;
let poundCalculatorService: PoundCalculatorService;
const A_OUTPUT = {plates: []};

beforeEach(() => {
    builder = {} as PoundCalculatorBuilder;
    builder.usingCalculatorInput = () => builder;
    builder.usingPoundWeights = () => builder;
    builder.build = () => A_OUTPUT;

    poundCalculatorService = new PoundCalculatorService(builder);
});

it('init without crashing', () => {
    expect(poundCalculatorService).not.toBe(null);
});

describe('when compute', () => {
    it('then PoundCalculatorBuilder.usingCalculatorInput called once', () => { });

    it('then PoundCalculatorBuilder.usingPoundWeights called once', () => { });

    it('then PoundCalculatorBuilder.build called once', () => { });
});
import { CalculatorService } from "../services/CalculatorService";
import { PoundCalculatorService } from "../services/PoundCalculatorService";
import { CalculatorBuilder } from "../builders/CalculatorBuilder";
import { PoundCalculatorBuilder } from "../builders/PoundCalculatorBuilder";
import { CalculatorHelper } from "../helpers/CalculatorHelper";
import { PoundCalculatorHelper } from "../helpers/PoundCalculatorHelper";

export class PoundCalculatorFactory {
    public static generate(): CalculatorService {
        const helper: CalculatorHelper = new PoundCalculatorHelper();
        const builder: CalculatorBuilder = new PoundCalculatorBuilder(helper);

        return new PoundCalculatorService(builder);
    }
}
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", function () {
  it("should add two numbers", function () {
    const logger = jasmine.createSpyObj("LoggerService",["log"]);
    const calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
  it("should add two numbers", function () {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, "unexpected subtraction result");
  });
});

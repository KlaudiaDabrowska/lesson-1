import {TurboNumber} from "./index"

let test: TurboNumber;

describe("math operation", function () {
  beforeEach(()=> { test = new TurboNumber(10) })

  it("subtract", () => {
    test.subtract(5)
    expect(test.result()).toBe(5);
  });
  it("divide", () => {
    test.divide(2);
    expect(test.result()).toBe(5)
  })
  it("doesn`t divide by 0", () => {
    expect( () => test.divide(0)).toThrow("Cannot divide by zero")
  })
  it("subtract and divide", () => {
    expect(new TurboNumber(17).subtract(5).divide(-3).result()).toBe(-4)
  })
});
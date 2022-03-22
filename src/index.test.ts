import {TurboNumber} from "./index"

describe("math operation", function () {
  it("substract", () => {
    const test = new TurboNumber(10);
    test.substract(5)
    expect(test.result()).toBe(5);
  });
  it("divide", () => {
    const test = new TurboNumber(12);
    test.divide(2);
    expect(test.result()).toBe(6)
  })
  it("doesn`t divide by 0", () => {
    const test = new TurboNumber(4);
    expect( () => test.divide(0)).toThrow("Cannot divide by zero")
  } )
});
import { calculator } from "../functions/calculator.js";

describe("calculator", () => {
    test("add two numbers", () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test("substract two numbers", () => {
        expect(calculator.substract(2, 3)).toBe(-1);
    });

    test("divide two numbers", () => {
        expect(calculator.divide(8, 4)).toBe(2);
    });

    test("divide by zero should throw an error", () => {
        expect(() => calculator.divide(8, 0)).toThrow("Can not divide by zero");
    });

    test("multiply two numbers", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });
});
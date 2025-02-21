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
});
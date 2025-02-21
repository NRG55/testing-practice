import { calculator } from "../functions/calculator.js";

describe("calculator", () => {
    test("add numbers", () => {
        expect(calculator.add(2, 3)).toBe(5);
    });
});
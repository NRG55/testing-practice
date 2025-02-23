import analyzeArray from "../functions/analyzeArray.js";

describe("analyze array", () => {
    test("avarage", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('average', 4);
    });

    test("min", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('min', 1);
    });

    test("max", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('max', 8);
    });

    test("length", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('length', 6);
    });

    test("a returned object", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
                                                average: 4,
                                                min: 1,
                                                max: 8,
                                                length: 6
                                            });
    });
});
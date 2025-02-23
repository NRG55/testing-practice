import analyzeArray from "./functions/analyzeArray.js";

describe("analyze array", () => {
    test("avarage", () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4});
    });
})
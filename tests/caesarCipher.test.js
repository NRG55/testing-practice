import ceaserCipher from "../functions/caesarCipher.js";

describe("ceasar cipher", () => {
    test("shift three characters", () => {
        expect(ceaserCipher("xyz", 3)).toBe("abc");
    })
})
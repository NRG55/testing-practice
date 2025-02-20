import sum from "../function/sum.js"

test("one plus four equal five", () => {
    expect(sum(1, 4)).toBe(5);
})
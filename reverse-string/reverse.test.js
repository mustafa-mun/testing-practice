import reverseString from "./reverse";

test("throws error when input is not string", () => {
  expect(() => reverseString(5)).toThrow("Input must be a string");
});

test("works with single string", () => {
  expect(reverseString("Apple")).toBe("elppA");
});

test("works with sentences", () => {
  expect(reverseString("How are you today?")).toBe("?yadot uoy era woH");
});

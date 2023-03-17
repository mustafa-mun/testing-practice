import analyzeArray from "./analyzeArray";

test("throws error when input is not an array", () => {
  expect(() => analyzeArray(5)).toThrow("Input must be an array");
});

test("thros error when array have non number item", () => {
  expect(() => analyzeArray(["string", false])).toThrow(
    "Array must contain only numbers"
  );
});

test("returns empty object when array is empty", () => {
  expect(analyzeArray([])).toMatchObject({});
});

test("works with array numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

import Calculator from "./calculator";

const calculator = Calculator();

test("functions throws error when input is not number", () => {
  expect(() => calculator.add("string")).toThrow("Input must be a number");
  expect(() => calculator.substract("string")).toThrow(
    "Input must be a number"
  );
  expect(() => calculator.multiply("string")).toThrow("Input must be a number");
  expect(() => calculator.divide("string")).toThrow("Input must be a number");
});

test("adding to number works", () => {
  expect(calculator.add(10, 9)).toEqual(19);
});

test("subsracting to number works", () => {
  expect(calculator.substract(10, 9)).toEqual(1);
});

test("multiplying to number works", () => {
  expect(calculator.multiply(10, 9)).toEqual(90);
});

test("dividing to number works", () => {
  expect(calculator.divide(10, 5)).toEqual(2);
});

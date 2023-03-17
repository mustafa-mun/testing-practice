import capitalize from "./capitalize";

test("throws error when input is not string", () => {
  expect(() => capitalize(5)).toThrow("Input must be a string");
});

test("works with sinlge string", () => {
  expect(capitalize("cow")).toBe("Cow");
});

test("works with sentences", () => {
  expect(capitalize("what a beatiful day!")).toBe("What A Beatiful Day!");
});

import caesarCipher from "./caesarCipher";

test("throws error when input is not string", () => {
  expect(() => caesarCipher(5)).toThrow("Input must be a string");
});

test("works with single letter", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("works with happy case", () => {
  expect(caesarCipher("abcde")).toBe("bcdef");
});

test("works with sentences", () => {
  expect(caesarCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test("works with whole alphabet", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("works with punctuation", () => {
  expect(caesarCipher("well, that's a lot of damage!")).toBe(
    "xfmm, uibu't b mpu pg ebnbhf!"
  );
});

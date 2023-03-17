import caesarCipher from "./caesarCipher";

test("throws error when input is not string", () => {
  expect(() => caesarCipher(5)).toThrow("Input must be a string");
});

test.skip("works with happy case", () => {
  expect(caesarCipher("abcde")).toBe("bcdef");
});

test.skip("works with sentences", () => {
  expect(caesarCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

test.skip("works with whole alphabet", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test.skip("works with punctuation", () => {
  expect(caesarCipher("well, that's a lot of damage!")).toBe("xfmm, uibu't b mpu pg ebnbhf!")
})

test.skip("works with capitalized words", () => {
  expect(caesarCipher("Fun Fun Function")).toBe("Gvo Gvo Gvodujpo")
})
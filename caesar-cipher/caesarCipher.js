export default function caesarCipher(string) {
  if (typeof string !== "string") throw new Error("Input must be a string");

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (string[i] === alphabet[j]) {
        if (alphabet[j + 1]) {
          output += alphabet[j + 1];
        } else {
          // if string have letter "z"
          output += "a";
        }
      }
    }
    if (!alphabet.includes(string[i])) {
      output += string[i];
    }
  }
  return output;
}

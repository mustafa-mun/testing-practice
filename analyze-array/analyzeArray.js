export default function analyzeArray(array) {
  if (typeof array !== "object") throw new Error("Input must be an array");
  if (array.some((item) => typeof item !== "number"))
    throw new Error("Array must contain only numbers");

  const output = {};
  if (!array.length) return output;

  let sum = 0;
  array.forEach((item) => (sum += item));
  let average = sum / array.length;
  output.average = average;
  output.min = Math.min(...array);
  output.max = Math.max(...array);
  output.length = array.length;
  return output;
}

export default function Calculator() {
  const checkError = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Input must be a number");
    }
  };

  const add = (num1, num2) => {
    checkError(num1, num2);
    return num1 + num2;
  };
  const substract = (num1, num2) => {
    checkError(num1, num2);
    return num1 - num2;
  };
  const multiply = (num1, num2) => {
    checkError(num1, num2);
    return num1 * num2;
  };
  const divide = (num1, num2) => {
    checkError(num1, num2);
    return num1 / num2;
  };

  return {
    add,
    substract,
    multiply,
    divide,
  };
}

export default function capitalize(string) {
  if (typeof string !== "string") throw new Error("Input must be a string");

  const array = string.split(" ");
  return array.map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");
}

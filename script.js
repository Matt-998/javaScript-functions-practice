function add7(number) {
  return number + 7;
}
console.log(add7(1));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 6));

function capitalize(text) {
  let lower = text.toLowerCase();
  let first = lower.charAt(0);
  let rest = lower.slice(1);
  return first.toUpperCase() + rest;
}
console.log(capitalize("lowercase"));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("BoTh"));

function lastLetter(text) {
  let lastChar = text.length;
  return text[lastChar - 1];
}
console.log(lastLetter("abcd"));

const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Clara" };
console.log(quaseArray);

Object.defineProperty(quaseArray, "toString", {
  value() { return Object.values(this); },
  enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Ana", "Clara"];

console.log(quaseArray.toString());
console.log(meuArray);

console.log(typeof quaseArray);
console.log(typeof meuArray);

let compararThis = function (param) {
  console.log(this === param);
};
compararThis(global);

const obj = {};
compararThis = compararThis.bind(obj);

compararThis(global);
compararThis(obj);
compararThis(module.exports);

console.log("\n");
// arrow function se referencia ao seu próprio módulo, não ao global
let compararThisArrow = (param) => console.log(this === param);
compararThisArrow(global);
compararThisArrow(module.exports);
compararThisArrow(this);

console.log("\n");

compararThisArrow = compararThisArrow.bind(obj);
compararThisArrow(obj);
compararThisArrow(module.exports);
compararThisArrow(this);
console.log(module.exports);

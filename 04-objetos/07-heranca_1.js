/* eslint-disable no-proto */
const ferrari = {
  modelo: "F40",
  velocidadeMaxima: 324,
};

const chevrolet = {
  modelo: "Corsa",
  velocidadeMaxima: 200,
};

console.log(ferrari, chevrolet);

console.log(ferrari.__proto__);
console.log(chevrolet.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(chevrolet.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.__proto__ === null);

function myObject() {}
console.log(typeof Object, typeof myObject);
console.log(Object.prototype, myObject.prototype);

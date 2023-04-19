/* eslint-disable no-return-assign, no-shadow */

// Arrow Functions
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === module.exports);
lexico1();
const lexico2 = lexico1.bind({});
lexico2();

// Parâmetro default
function log(texto = "Revisão") {
  console.log(texto);
}

log();
log("Hello World!");

// Operador rest
function somarRest(...numeros) {
  let total = 0;
  numeros.forEach((numero) => total += numero);
  return total;
}

console.log(somarRest(1, 2, 3, 4));

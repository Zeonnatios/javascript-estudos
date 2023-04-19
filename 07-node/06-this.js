console.log(this === module.exports);
console.log(this === exports);
console.log(this === global);
console.log(this === module);
console.log(module.exports === global);
console.log(exports === global);

console.log("\n");

function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === global);
  console.log(this === module.exports);
  console.log(this === exports);
  // console.log(global);
  // console.log(this);
  this.perigo = "Dentro de global";
}

logThis();
console.log(global.perigo);
this.modulo = "Dentro do module.exports";
console.log(this.modulo);

console.log("\n");

function functionExpression() {
  console.log("Dentro da função, o this...");
  console.log("Aponta para o global --> ", this === global);
  console.log("Não aponta para o exports para o exports --> ", this === exports);
  console.log("Não aponta para o module.exports --> ", this === module.exports);
  console.log("O this, dentro da função, aponta para o GLOBAL");
}

functionExpression();

/**
 * Isso não é nenhuma novidade,
 * pois já vimos isso na aula passada.
 *
 * Porém, quando falamos de arrow funcions, a coisa muda um pouco.
 * Isso porque dentro de uma arrow function,
 * o this não vai apontar mais para o objeto global,
 * e sim para o module.export / exports.
 */
console.log("\n");
const arrowFunction = () => {
  console.log("Dentro da ARROW FUNCTION, o this...");
  console.log("Aponta para o exports para o exports --> ", this === exports);
  console.log("Aponta para o module.exports --> ", this === module.exports);
  console.log("Não aponta para o global --> ", this === global);
  console.log("O this, dentro da ARROW FUNCTION, aponta para o MODULE.EXPORTS");
};

arrowFunction();

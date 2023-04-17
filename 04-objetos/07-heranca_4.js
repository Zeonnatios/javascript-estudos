/* eslint-disable no-proto */

function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const first = new MeuObjeto();
const second = new MeuObjeto();
console.log(first.__proto__ === second.__proto__);
console.log(MeuObjeto.prototype === first.__proto__);
console.log(MeuObjeto.prototype === second.__proto__);

MeuObjeto.prototype.nome = "Maria";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia, eu sou ${this.nome}`);
};

first.nome = "Boris";
first.falar();

// Resumundo a loucura
console.log((new MeuObjeto()).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

/* eslint-disable no-extend-native, no-proto, no-undef */

// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "Zero";
const avo = { attr1: "A" };

const pai = { __proto__: avo, attr2: "B" };

const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
console.log(pai.attr0, pai.attr1, pai.attr2, pai.attr3);
console.log(avo.attr0, avo.attr1, avo.attr2, avo.attr3);
console.log(__proto__.attr0);

const carro = {
  velocidadeAtual: 0,
  acelerarMais(delta) {
    if (this.velocidadeAtual + delta <= this.velicidadeMaxima) {
      this.velocidadeAtual += delta;
    } else {
      this.velocidadeAtual = this.velicidadeMaxima;
    }
  },
  velocimetro() {
    return `${this.velocidadeAtual} km/H de ${this.velicidadeMaxima} Km/H`;
  },
};

const ferrari = {
  modelo: "F40",
  velicidadeMaxima: 324,
};

const chevrolet = {
  modelo: "Corsa",
  velicidadeMaxima: 200,
  velocimetro() {
    return `${this.modelo}: ${super.velocimetro()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
console.log(ferrari.__proto__ === carro);

Object.setPrototypeOf(chevrolet, carro);
console.log(chevrolet.__proto__ === carro);

console.log(chevrolet.velocimetro());

chevrolet.acelerarMais(130);
console.log(chevrolet.velocimetro());

console.log(ferrari.velocimetro());

ferrari.acelerarMais(300);
console.log(ferrari.velocimetro());

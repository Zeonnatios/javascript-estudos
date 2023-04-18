/* eslint-disable no-extend-native */
Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index += 1) {
    if (callback(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(produtos.filter2((product) => product.fragil));

const caro = (product) => product.preco >= 500;
const fragil = (product) => product.fragil;

console.log(produtos.filter2(caro).filter2(fragil));

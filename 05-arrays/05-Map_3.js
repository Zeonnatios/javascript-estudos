/* eslint-disable no-extend-native */
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index += 1) {
    newArray.push(callback(this[index], index, this));
  }
  return newArray;
};

const carrinho = [
  "{ \"nome\": \"Borracha\", \"preco\": 3.45}",
  "{ \"nome\": \"Caderno\", \"preco\": 13.90}",
  "{ \"nome\": \"Kit de Lapis\", \"preco\": 41.22}",
  "{ \"nome\": \"Caneta\", \"preco\": 7.50}",
];

// Retornar um array apenas com os preços
const result = carrinho.map2((element) => JSON.parse(element)).map2((element) => element.preco);
console.log(result);

const paraObjeto = (element) => JSON.parse(element);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);

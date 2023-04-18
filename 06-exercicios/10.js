const simboloMais = (quantidade) => {
  let text = "";
  for (let index = 0; index < quantidade; index += 1) {
    text += "+";
  }
  return text;
};

console.log(simboloMais(1));
console.log(simboloMais(2));
console.log(simboloMais(3));
console.log(simboloMais(4));
console.log(simboloMais(5));

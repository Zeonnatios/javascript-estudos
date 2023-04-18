const filtrarPorQuantidadeDeDigitos = (array, comparador) => {
  const stringArray = array.map((numero) => String(numero));
  const filtered = stringArray.filter((numero) => numero.length === comparador);
  return filtered.map((numero) => Number(numero));
};

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));

const calcularMedia = (conjunto) => {
  const soma = conjunto.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  const divisor = conjunto.length - 1;
  return soma / divisor;
};

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([10, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));

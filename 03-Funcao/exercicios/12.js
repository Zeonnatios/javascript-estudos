const calcularFatorial = (numero) => {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let result = 1;
  for (let index = 1; index <= numero; index += 1) {
    result *= index;
  }

  return result;
};

console.log(calcularFatorial(5));

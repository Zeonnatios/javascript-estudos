const multiplicar = (primeiro, segundo) => {
  let total = 0;
  for (let index = 0; index < segundo; index += 1) {
    total += primeiro;
  }
  return total;
};

console.log(multiplicar(5, 5));
console.log(multiplicar(10, 10));

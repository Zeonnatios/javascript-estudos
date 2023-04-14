const div = (dividendo, divisor) => {
  const result = dividendo / divisor;
  const resto = dividendo % divisor;
  return `Resultado: ${result}, Resto: ${resto}`;
};

console.log(div(10, 5));
console.log(div(100, 10));
console.log(div(25, 3));
console.log(div(38, 4));
console.log(div(63, 6));

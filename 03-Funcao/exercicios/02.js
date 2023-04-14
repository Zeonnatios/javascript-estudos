const classificarTriangulo = (a, b, c) => {
  if (a === b && b === c) return "Equilátero";
  if (a === b || a === c || b === c) return "Isósceles";
  if (a !== b && a !== c && b !== c) return "Escaleno";
  return -1;
};

console.log(classificarTriangulo(1, 1, 1));
console.log(classificarTriangulo(2, 2, 3));
console.log(classificarTriangulo(1, 2, 3));

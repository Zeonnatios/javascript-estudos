// eslint-disable-next-line no-extend-native
Number.prototype.between = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const printResult = (nota) => {
  if (nota.between(9, 10)) {
    console.log("Quadro de Honra");
  } else if (nota.between(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.between(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.between(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota inválida");
  }
};

printResult(10);
printResult(8.9);
printResult(6.9);
printResult(4);
printResult(3);
printResult(0);
printResult(-1);

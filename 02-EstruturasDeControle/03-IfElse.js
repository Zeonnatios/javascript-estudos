const printResult = (nota) => {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
};

printResult(10);
printResult(6);
printResult("8"); // cuidado

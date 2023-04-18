const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach((name, index) => {
  console.log(`${index + 1}) ${name}`);
});

console.log("\n");

aprovados.forEach((nome) => console.log(nome));

console.log("\n");

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);

console.log("\n");

aprovados.forEach((name, index, array) => {
  console.log(`${index + 1}) ${name}`);
  console.log("Inscritos: ", array);
});

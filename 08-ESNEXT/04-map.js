const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });
tecnologias.set("vue", { framework: true });

console.log(tecnologias);
console.log(tecnologias.react);
console.log(tecnologias.get("react"));
console.log(tecnologias.get("react").framework);

console.log("\n");

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

console.log(chavesVariadas);
chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor);
});

console.log("\n");

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
chavesVariadas.clear();
console.log(chavesVariadas.size);

console.log("\n");

console.log("Chave não aceita repetição");
chavesVariadas.set(123, "primeiro");
console.log(chavesVariadas);
chavesVariadas.set(123, "segundo");
chavesVariadas.set(456, "primeiro");
console.log(chavesVariadas);

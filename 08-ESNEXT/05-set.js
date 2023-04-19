// não aceita repetição / não indexa
const times = new Set();
times.add("Corinthians");
times.add("Vasco").add("Santos").add("Ponte Preta");
times.add("Cruzeiro");
times.add("Vasco");

console.log(times);
console.log(times.size);
console.log(times.has("vasco")); // precisa ser o nome exato
console.log(times.has("Vasco"));
times.delete("Santos");
console.log(times.has("Santos"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas", "Daniel"];
const inscritos = new Set(nomes);
console.log(inscritos); // não repetiu nome Lucas

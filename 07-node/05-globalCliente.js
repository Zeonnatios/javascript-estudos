require("./05-global");

console.log(MinhaApp.saudacao());

// Sem o freeze, o atributo nome é mutável
MinhaApp.nome = "Mudança de nome";
console.log(MinhaApp.nome);

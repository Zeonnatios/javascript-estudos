// pessoa -> 123 -> {...}
const pessoa = { nome: "Joao" };
console.log(pessoa);
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: "Ana" };
// console.log(pessoa);

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.idade = 18;
delete pessoa.nome;
console.log(pessoa);

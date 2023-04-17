// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: "Qualquer", preco: 1.99, tag: "promoção",
});

console.log("Extensível", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
console.log(produto);
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: "Boris", idade: 8 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "William";
delete pessoa.nome;
console.log(pessoa);
pessoa.idade = 10;
console.log(pessoa);

// Object.freeze = selado + valores constantes

// Factory Simples (função que retorna um objeto)

function criarPessoa() {
  return {
    nome: "Matheus",
    idade: 23,
  };
}

const pessoa = criarPessoa();
console.log(pessoa);

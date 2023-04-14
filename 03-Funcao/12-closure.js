// Closure é o escopo criado quando uma função é declarada
// Esse escope permite a função acessar e manipular variáveis externas a função

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();

console.log(minhaFuncao());

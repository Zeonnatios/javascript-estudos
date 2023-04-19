// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ...funcionario, ativo: true };
console.log(funcionario, clone);
console.log(funcionario === clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoA);
console.log(grupoFinal);

// Operador rest
function somarRest(...numeros) {
  console.log(numeros, ...numeros);
  console.log(typeof numeros);
  const soma = numeros.reduce((total, numero) => total + numero);
  return soma;
}

console.log(somarRest(1, 2, 3, 4));

const objetoParaArray1 = (objeto) => Object.entries(objeto);

const objetoParaArray2 = (objeto) => {
  const chaves = Object.keys(objeto);
  return chaves.map((chave) => [chave, objeto[chave]]);
};

const pessoa = {
  nome: "Matheus",
  idade: 23,
  profissao: "Desenvolvedor Full Stack",
};

console.log(objetoParaArray1(pessoa));
console.log(objetoParaArray2(pessoa));

const removerPropriedade = (objeto, atributo) => {
  const copia = { ...objeto };
  delete copia[atributo];
  return copia;
};

const original = {
  nome: "Caneta",
  descricao: "Nao preenchido",
  id: 1,
};

const copia = removerPropriedade(original, "descricao");
console.log(copia);
console.log(Object.is(removerPropriedade(copia, "descricao"), original));

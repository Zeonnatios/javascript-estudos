const receberMelhorEstudante = (objeto) => {
  const nomes = Object.keys(objeto);
  const result = { nome: "", media: 0 };
  nomes.forEach((nome) => {
    const soma = objeto[nome].reduce((acumulador, numero) => acumulador + numero);
    const divisor = objeto[nome].length;
    const media = soma / divisor;

    if (result.media < media) {
      result.nome = nome;
      result.media = media;
    }
  });

  return result;
};

console.log(receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
}));

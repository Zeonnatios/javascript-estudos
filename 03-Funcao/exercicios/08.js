const contadorRecords = (pontuacao) => {
  const indexMenorPontuacao = pontuacao.indexOf(String(Math.min(...pontuacao)));
  let contadorMaiorPontuacao = 0;
  let maiorPontuacao = Number(pontuacao[0]);

  pontuacao.forEach((element, index) => {
    if (Number(element) > maiorPontuacao) {
      contadorMaiorPontuacao += 1;
      maiorPontuacao = Number(pontuacao[index]);
    }
  });

  return [contadorMaiorPontuacao, indexMenorPontuacao + 1];
};

const pontuacao = ["10", "20", "20", "8", "25", "3", "0", "30", "1"];
console.log(contadorRecords(pontuacao));

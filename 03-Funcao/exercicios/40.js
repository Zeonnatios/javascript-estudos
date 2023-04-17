const calcularMedia = (notas) => {
  const soma = notas.reduce((prev, next) => prev + next);
  const media = soma / notas.length;
  console.log(soma, media);
  if (media >= 0 && media <= 4.9) console.log("Conceito D");
  if (media >= 5 && media <= 6.9) console.log("Conceito C");
  if (media >= 7 && media <= 8.9) console.log("Conceito B");
  if (media >= 9 && media <= 10) console.log("Conceito A");
};

// const avaliador = (media) {}
calcularMedia([1, 7, 6.5, 3, 5]);
calcularMedia([7, 7, 6.5, 3, 10]);
calcularMedia([8, 7, 6.5, 9, 10]);
calcularMedia([9, 10, 9, 10, 10]);

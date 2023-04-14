const diaValido = (dia) => {
  switch (dia) {
    case 1: case 7:
      console.log("Fim de semana");
      break;

    case 2: case 3: case 4: case 5: case 6:
      console.log("Dia válido");
      break;

    default:
      console.log("Dia inválido");
      break;
  }
};

diaValido(0);
diaValido(1);
diaValido(2);
diaValido(3);
diaValido(4);
diaValido(5);
diaValido(6);
diaValido(7);

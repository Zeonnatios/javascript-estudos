const array = [10, -20, 30, 40, -50, 60, 70, -80, 90, -100];

const contadorNumerosNegativos = (lista) => lista.filter((number) => number < 0).length;

console.log(contadorNumerosNegativos(array));

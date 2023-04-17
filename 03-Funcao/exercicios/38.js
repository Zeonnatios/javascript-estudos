const imprimirImparesEntreValores = (inicio, fim) => {
  for (let index = inicio; index <= fim; index += 1) {
    if (index % 2 !== 0) console.log(index);
  }
};

imprimirImparesEntreValores(0, 100);

const fabricantes = ["toyota", "honda", "subaru", "lexus"];

const print = (nome, indice) => {
  console.log(`${indice + 1}. ${nome}`);
};

fabricantes.forEach(print);
fabricantes.forEach((name, index) => console.log(`${index + 1}. ${name}`));

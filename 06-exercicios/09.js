const repetir = (conteudo, repetidor) => {
  const array = [];
  for (let index = 0; index < repetidor; index += 1) {
    array.push(conteudo);
  }
  return array;
};

console.log(repetir("código", 2));
console.log(repetir(7, 3));

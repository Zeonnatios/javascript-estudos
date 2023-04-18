const removerVogais = (texto) => {
  const vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  const letras = texto.split("");
  const result = letras.filter((letra) => !vogais.includes(letra));
  return result.join("");
};

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Teste"));
console.log(removerVogais("Fundamentos"));

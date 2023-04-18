// eslint-disable-next-line no-unused-vars
const contaCaracteres2 = (caracter, texto) => {
  const letras = texto.split("");
  const filterLetras = letras.filter((letra) => letra === caracter);
  return filterLetras.length;
};

const contaCaracteres = (caracter, texto) => texto.split("").filter((letra) => letra === caracter).length;

console.log(contaCaracteres("r", "A sorte favorece os audazes"));
console.log(contaCaracteres("c", "Conhece-te a ti mesmo"));

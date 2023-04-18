const generateRandomNumber = () => {
  const min = 0;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const funcaoDaSorte = (numero) => {
  const randomNumber = generateRandomNumber();
  return numero === randomNumber
    ? `Parabéns! O número sorteado foi o ${randomNumber}`
    : `Que pena! O número sorteado foi o ${randomNumber}`;
};

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(1));

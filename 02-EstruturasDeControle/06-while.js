function getRandomIntegerBetween(min, max) {
  const randomInteger = Math.random() * (max - min) + min;
  return Math.floor(randomInteger);
}

let optionMenu = 0;

while (optionMenu !== -1) {
  optionMenu = getRandomIntegerBetween(-1, 10);
  console.log(`Random number: ${optionMenu}`);
}

console.log("Fim...");

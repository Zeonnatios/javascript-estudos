function getRandomIntegerBetween(min, max) {
  const randomInteger = Math.random() * (max - min) + min;
  return Math.floor(randomInteger);
}

let optionMenu = 0;

do {
  optionMenu = getRandomIntegerBetween(-1, 10);
  console.log(`Random number: ${optionMenu}`);
} while (optionMenu !== -1);

console.log("Fim...");

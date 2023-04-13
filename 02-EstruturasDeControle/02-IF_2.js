function teste1(num) {
  if (num > 7) console.log(num);
  console.log("Final");
}

teste1(6);
teste1(8);

console.log("\nTeste 2\n ");

// não utilizar o ';' no parenteses ')' em estruturas de controle
function teste2(num) {
  if (num > 7); console.log(num);
  console.log("Final");
}

teste2(6);
teste2(8);

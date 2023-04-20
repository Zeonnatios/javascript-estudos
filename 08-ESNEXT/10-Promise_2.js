// setTimeout(() => {
//   console.log("Executando primeira callback");

//   setTimeout(() => {
//     console.log("Executando segunda callback");

//     setTimeout(() => {
//       console.log("Executando terceira callback");
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve("Tá tudo resolvido meu parceiro");
    }, tempo);
  });
}

esperarPor(2000)
  .then(() => esperarPor())
  .then(esperarPor);

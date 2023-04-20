function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// esperarPor(2000)
//   .then(() => console.log("Executando Promise 1..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando Promise 2..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando Promise 3..."));

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

// o return é uma promise
async function executar() {
  const valor = await retornarValor();
  console.log(`Async/Await: ${valor}...`);
  await esperarPor(1500);
  console.log(`Async/Await: ${valor + 1}...`);
  await esperarPor(1500);
  console.log(`Async/Await: ${valor + 2}...`);
  await esperarPor(1500);
  console.log(`Async/Await: ${valor + 3}...`);
  return valor + 3;
}

executar().then(console.log);

async function execucaoAssincrona() {
  const valor = await executar();
  console.log(`Async: ${valor}`);
}

execucaoAssincrona();

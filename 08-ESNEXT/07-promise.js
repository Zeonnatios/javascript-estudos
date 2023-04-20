// Promise é uma estrutura que tem por objetivo representar uma operação assincrona
// E trabalha com o conceito de promessa, que pode ser atendido ou rejeitado
// O resolve retorna apenas um parâmetro. Dica utilize objeto ou array

function falarDepoisDe(segundos, frase, status = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve({ frase });
      }
      reject(console.log("Status false, reject"));
    }, segundos * 1000);
  });
}

// tomar cuidado com esses parâmetros... e funcionamento do resolve/reject
falarDepoisDe(3, "Hello World!", true)
  .then(({ frase }) => frase.concat(" :D"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((err) => err);

falarDepoisDe(3, "Hello World!", false)
  .then(({ frase }) => frase.concat(" :D"))
  .then((outraFrase) => console.log(outraFrase))
  .catch((err) => err);

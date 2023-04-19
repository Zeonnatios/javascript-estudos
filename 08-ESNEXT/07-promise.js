// Promise é uam estrutura que tem por objetivo representar uma operação assincrona
// E trabalha com o conteido de promessa, que pode ser atendido ou rejeitado
// O resolve retorna apenas um parâmetro. Dica utilize objeto ou array

function falarDepoisDe(segundos, frase, status = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve({
          frase,
          string: "isso é outro parametro String",
        });
      } else {
        reject(console.log("Status false, reject"));
      }
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Hello World!", true)
  .then(({ frase, string }) => {
    console.log(string);
    return frase.concat(" :D");
  })
  .then((outraFrase) => console.log(outraFrase))
  .catch((err) => err);

falarDepoisDe(3, "Hello World!", false)
  .then(({ frase, string }) => {
    console.log(string);
    return frase.concat(" :D");
  })
  .then((outraFrase) => console.log(outraFrase))
  .catch((err) => err);

const contadorA = require("./04-instanciaUnica");
const contadorB = require("./04-instanciaUnica");

const contadorC = require("./04-instanciaNova")();
const contadorD = require("./04-instanciaNova")();

contadorA.inc();
contadorA.inc();

// contadorA === contadorB (cache de modulos)
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);

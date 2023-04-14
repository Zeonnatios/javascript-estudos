// https://www.mobills.com.br/calculadoras/calculadora-juros-simples/
// https://www.mobills.com.br/calculadoras/calculadora-juros-compostos/

const calcularJurosSimples = (P, I, N) => (P * N) + (P * I * N);
const calcularJurosCompostos = (P, I, N) => P * (1 + I) ** N;

console.log(calcularJurosSimples(1000, 0.1, 10));
console.log(calcularJurosCompostos(1400, 0.07, 2));

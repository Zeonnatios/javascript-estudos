// console.log(global);

// Escopo global (tomar cuidado)
global.MinhaApp = Object.freeze({
  saudacao() {
    return "Hello World";
  },
  nome: "Sistema de saudação",
});

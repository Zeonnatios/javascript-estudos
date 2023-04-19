// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
  ctx.valor1 = "Middleware 1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "Middleware 2";
  next();
};

const passo3 = (ctx) => { ctx.valor3 = "Middleware 3"; };

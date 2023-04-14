const valor = "Global";

function myFunction() {
  // const valor = "Local";
  console.log(valor);
}

myFunction();

function exec() {
  const valor = "Local";
  myFunction();
}

exec();

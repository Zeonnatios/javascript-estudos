const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilotos);

pilotos.pop(); // remove ultimo
console.log(pilotos);

pilotos.push("Verstappen"); // insere no final
console.log(pilotos);

pilotos.shift(); // remove primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); // insere no primeiro
console.log(pilotos);

// splice adiciona e remove elementos

pilotos.splice(2, 0, "Vettel", "Leclerc", "Drugovich"); // adicioda
console.log(pilotos);

pilotos.splice(3, 1); // remove
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(pilotos);
console.log(algunsPilotos2);

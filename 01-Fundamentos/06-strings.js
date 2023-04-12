const escola = "Cod3r";

console.log(escola.charAt(0));
console.log(escola.charAt(1));
console.log(escola.charAt(2));
console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charAt(5));

console.log(escola.charCodeAt("C")); // Tabela ASCI / UNICODE
console.log(escola.indexOf("r"));

console.log(escola.substring(0, 3));
console.log(escola.substring(4));

console.log(escola.concat("!"));
console.log("Escola".concat(escola).concat("!"));

console.log(escola.replace("3", "e"));
console.log("Ana,Maria,Pedro".split(","));
console.log(typeof "Ana,Maria,Pedro".split(","));
console.log(typeof [], typeof {});

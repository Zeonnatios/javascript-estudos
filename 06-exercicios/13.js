const filtrarNumeros = (array) => array.filter((element) => typeof element === "number");

console.log(filtrarNumeros(["javascript", "java", 1, 3, "20"]));

const filtrarNumeros2 = (array1, array2) => array1.filter((element) => array2.includes(element));

console.log(filtrarNumeros2(["javascript", "java", 1, 3, "20"], [1, 3]));

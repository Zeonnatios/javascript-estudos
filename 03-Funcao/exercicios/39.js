const first = ["a", "b", "c", "d"];
const second = ["w", "x", "y", "z"];

const inverterValores = (array1, array2) => {
  for (let index = 0; index < 4; index += 1) {
    const aux = first[index];
    first[index] = second[index];
    second[index] = aux;
  }
  console.log(array1, array2);
};

inverterValores(first, second);

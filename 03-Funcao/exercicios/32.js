const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const mediaAritmetica = (valores) => {
  let sum = 0;
  valores.forEach((element) => {
    sum += element;
  });
  return sum / valores.length;
};

console.log(mediaAritmetica(array));

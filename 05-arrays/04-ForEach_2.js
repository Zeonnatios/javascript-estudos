/* eslint-disable no-extend-native */
Array.prototype.forEach2 = function (callback) {
  for (let index = 0; index < this.length; index += 1) {
    callback(this[index], index, this);
  }
};

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2((name, index) => {
  console.log(`${index + 1}) ${name}`);
});

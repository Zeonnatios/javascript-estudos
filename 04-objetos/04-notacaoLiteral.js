const a = 1;
const b = 2;
const c = 3;

const first = { a, b, c };
const second = { atributoA: a, atributoB: b, atributoC: c };
console.log(first);
console.log(second);

const nomeAttr = "nota";
const valorAttr = 9.5;

const third = {};
third[nomeAttr] = valorAttr;
console.log(third);

const fourfh = { [nomeAttr]: valorAttr };
console.log(fourfh);

const fifth = {
  minhaFUncao() {
    console.log("Hello World");
  },
};
console.log(fifth);

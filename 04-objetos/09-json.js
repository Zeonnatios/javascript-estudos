const first = {
  // eslint-disable-next-line no-undef
  a: 1, b: 2, c: 3, soma() { return a + b + c; },
};
const firstJson = JSON.stringify(first);
console.log(firstJson);
const testeJson = "{ \"a\": 1, \"b\": 2, \"c\": 3, \"text\": \"string\" }";
console.log(testeJson);

console.log(JSON.parse(testeJson));

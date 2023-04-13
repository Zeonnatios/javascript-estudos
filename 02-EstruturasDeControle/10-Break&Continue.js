/* eslint-disable no-restricted-syntax, guard-for-in, no-continue, eqeqeq */
// break funciona em estruturas WHILE, FOR e SWITCH
// e irá agir ao bloco mais próximo dele do tipo while, for e switch

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const value in nums) {
  if (value == 5) {
    break;
  }
  console.log(`${value} = ${nums[value]}`);
}

console.log("\n");

for (const value in nums) {
  if (value == 5) {
    continue;
  }
  console.log(`${value} = ${nums[value]}`);
}

for (const a in nums) {
  for (const b in nums) {
    if (a == 2 && b == 3) continue;
    console.log(`Par: (${a} ${b})`);
  }
}

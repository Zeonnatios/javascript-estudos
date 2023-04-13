/* eslint-disable no-var, vars-on-top, no-loop-func */
const funcs = [];

for (var i = 0; i < 10; i += 1) {
  funcs.push(() => console.log(i));
}

funcs[0]();
funcs[2]();
funcs[4]();

const array = [];

for (let j = 0; j < 10; j += 1) {
  array.push(() => console.log(j));
}

array[0]();
array[2]();
array[4]();

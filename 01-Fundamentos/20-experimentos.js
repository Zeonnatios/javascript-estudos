const a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "this.e";

console.log(global);
console.log(a);
console.log(global.b);
console.log(this.c);
console.log("module exports");
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);
console.log(this === global);

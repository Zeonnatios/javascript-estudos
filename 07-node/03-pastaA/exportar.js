console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;

console.log("\n");
console.log("Module exports");
console.log(module.exports);
console.log(this);
console.log("Exports");
console.log(exports);

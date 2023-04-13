console.log("01 - '1' == 1", "1" == 1);
console.log("02 - '1' ==== 1", "1" === 1);
console.log("03 - '1' != 1", "1" != 1);
console.log("04 - '1' !== 1", "1" !== 1);

console.log("05 - 3 < 2", 3 < 2);
console.log("06 - 3 > 2", 3 > 2);
console.log("07 - 3 <= 2", 3 <= 2);
console.log("08 - 3 >= 2", 3 >= 2);

const firstDate = new Date(0);
const secondDate = new Date(0);
console.log(firstDate);
console.log(secondDate);

console.log("09 - ", firstDate == secondDate);
console.log("10 - ", firstDate === secondDate);
console.log("11 - ", firstDate.getTime() === secondDate.getTime());

console.log("12 - ", undefined == null);
console.log("13 - ", undefined === null);

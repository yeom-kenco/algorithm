const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n").map(Number);

a = input[0] + 87;
b = input[1] % 10;
console.log(a);
console.log(b);
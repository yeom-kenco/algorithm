const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().split(" ");
a = Number(a)+8;
b = Number(b)*3;

console.log(a);
console.log(b);
console.log(a*b);
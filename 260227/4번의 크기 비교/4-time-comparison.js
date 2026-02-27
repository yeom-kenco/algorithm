const fs = require("fs");
let [a, other] = fs.readFileSync(0).toString().trim().split("\n");
a = Number(a);
let [b,c,d,e] = other.split(" ").map(Number);

console.log(a>b?1:0);
console.log(a>c?1:0);
console.log(a>d?1:0);
console.log(a>e?1:0);

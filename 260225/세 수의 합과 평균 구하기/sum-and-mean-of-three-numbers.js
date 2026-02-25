const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().split(" ").map(Number);

console.log(a+b+c);
console.log(parseInt((a+b+c)/3));
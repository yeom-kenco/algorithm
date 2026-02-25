const fs = require("fs");
let [first,c] = fs.readFileSync(0).toString().split("\n");
let [a,b] = first.split(" ");

console.log(a,b,c);
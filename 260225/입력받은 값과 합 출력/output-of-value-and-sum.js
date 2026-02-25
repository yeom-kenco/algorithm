const fs = require("fs");
let data = fs.readFileSync(0).toString().split(" ");
let A = Number(data[0]);
let B = Number(data[1]);
console.log(A,B,A+B);
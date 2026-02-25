const fs = require("fs");
let data = fs.readFileSync(0).toString().split(" ");
let a = Number(data[0]);
let b = Number(data[1]);

console.log(a+b);
const fs = require("fs");
let data = fs.readFileSync(0).toString().split("\n");
let a = Number(data[0]).toFixed(3);
let b = Number(data[1]).toFixed(3);
let c = Number(data[2]).toFixed(3);
console.log(`${a}\n${b}\n${c}`);
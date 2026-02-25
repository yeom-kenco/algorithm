const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);
A = input[0];
B = input[1];
console.log(`${parseInt(A/B)}...${A%B}`)
const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().split(" ").map(Number);

let result = (a + b)/(a - b)
console.log(result.toFixed(2));
const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());
console.log((N*30.48).toFixed(1));
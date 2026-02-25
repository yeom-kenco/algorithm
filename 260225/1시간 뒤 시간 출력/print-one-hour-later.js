const fs = require("fs");
let [h, m] = fs.readFileSync(0).toString().split(":");
h = Number(h)+1
console.log(`${h}:${m}`)
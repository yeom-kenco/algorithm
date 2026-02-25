const fs = require("fs");
let [m,d,y] = fs.readFileSync(0).toString().trim().split("-");
console.log(`${y}.${m}.${d}`);
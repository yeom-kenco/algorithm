const fs = require("fs");
let c = fs.readFileSync(0).toString().trim().split("-");
console.log(c[0]+c[1]);
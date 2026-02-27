const fs = require("fs");
let [a,b,c]= fs.readFileSync(0).toString().split(" ").map(Number);

console.log((b>a && b<c)?1:0);
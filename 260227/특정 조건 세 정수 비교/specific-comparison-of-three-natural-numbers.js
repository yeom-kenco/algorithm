const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(Number);

resultA = (a<=b && a<=c)?1:0;
resultB = (a==b && b==c)?1:0;
console.log(resultA, resultB);
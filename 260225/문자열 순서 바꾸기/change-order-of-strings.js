const fs = require("fs");
let [S,T] = fs.readFileSync(0).toString().trim().split("\n");
[S,T]=[T,S];
console.log(S);
console.log(T);
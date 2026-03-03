const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

let i = 1;
while(i<=N){
    console.log("*");
    i++;
}
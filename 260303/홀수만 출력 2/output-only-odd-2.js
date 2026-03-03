const fs = require("fs");
let [B, A]=fs.readFileSync(0).toString().split(" ").map(Number);

let result = "";
for(let i=B;i>=A;i-=2){
    result+= i + " ";
}
console.log(result);
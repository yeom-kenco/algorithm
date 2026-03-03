const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());
let i = 1;
let result = "";
while(i<=N){
    result+=i+" ";
    i++;
}
console.log(result);
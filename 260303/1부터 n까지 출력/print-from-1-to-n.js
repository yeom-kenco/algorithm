const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

result="";
for(let i=1;i<=N;i++){
    result+=i+" ";
}
console.log(result);
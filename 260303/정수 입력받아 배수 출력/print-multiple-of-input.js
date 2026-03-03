const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());
result="";
for(let i=1;i<=5;i++){
    result+=(i*N+" ");
}
console.log(result);
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for(let i = 1; i<=n; i++){
    result = "";
    for (let j=i*2-1; j>0;j--){
        result += "*";
    }
    console.log(result);
}